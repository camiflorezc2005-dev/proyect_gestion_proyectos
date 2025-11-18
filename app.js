// Data Storage (In-Memory)
let currentUser = null;
let projects = [
  {
    id: 1,
    title: "Sistema de gestión académica",
    description: "Desarrollo de un sistema web para gestionar procesos académicos",
    objectives: "Automatizar procesos, mejorar eficiencia, centralizar información",
    authors: "Juan Pérez",
    student: "Juan Pérez",
    director: "Dr. García",
    jury: [],
    phase: "Anteproyecto",
    status: "Pendiente",
    deliverables: [],
    observations: [],
    evaluations: [],
    defenseDate: null,
    defenseLocation: null,
    createdDate: "2025-10-15"
  },
  {
    id: 2,
    title: "Aplicación móvil de comercio electrónico",
    description: "App para compra y venta de productos locales",
    objectives: "Conectar vendedores locales con compradores",
    authors: "María González",
    student: "María González",
    director: "Dra. Fernández",
    jury: ["Dra. López", "Dr. Martínez"],
    phase: "Desarrollo",
    status: "En Revisión",
    deliverables: [
      {
        id: 1,
        name: "Propuesta inicial",
        phase: "Anteproyecto",
        fileName: "propuesta.pdf",
        uploadDate: "2025-10-20",
        status: "Aprobado"
      }
    ],
    observations: [
      {
        id: 1,
        author: "Dra. Fernández",
        text: "Excelente propuesta inicial. Continuar con el desarrollo.",
        date: "2025-10-21",
        action: "approve"
      }
    ],
    evaluations: [],
    defenseDate: "2025-12-15T10:00",
    defenseLocation: "Aula 301",
    createdDate: "2025-10-10"
  }
];

const users = [
  { id: 1, username: "estudiante1", password: "123", role: "student", name: "Juan Pérez" },
  { id: 2, username: "estudiante2", password: "123", role: "student", name: "María González" },
  { id: 3, username: "coord1", password: "123", role: "coordinator", name: "Dr. Coordinador" },
  { id: 4, username: "director1", password: "123", role: "director", name: "Dr. García" },
  { id: 5, username: "director2", password: "123", role: "director", name: "Dra. Fernández" },
  { id: 6, username: "jurado1", password: "123", role: "jury", name: "Dra. López" },
  { id: 7, username: "jurado2", password: "123", role: "jury", name: "Dr. Martínez" }
];

const juryMembers = ["Dra. López", "Dr. Martínez", "Dra. Sánchez", "Dr. Ramírez"];
const directors = ["Dr. García", "Dra. Fernández", "Dr. López"];

let projectIdCounter = projects.length + 1;

// Utility Functions
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

function getStatusClass(status) {
  const statusMap = {
    'Pendiente': 'status--pending',
    'En Revisión': 'status--review',
    'Aprobado': 'status--approved',
    'Rechazado': 'status--rejected',
    'Finalizado': 'status--completed'
  };
  return statusMap[status] || 'status--pending';
}

function formatDate(dateString) {
  if (!dateString) return 'No programada';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const role = document.getElementById('roleSelect').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const user = users.find(u => u.username === username && u.password === password && u.role === role);
  
  if (user) {
    currentUser = user;
    showDashboard(role);
    showToast(`Bienvenido, ${user.name}`);
  } else {
    showToast('Credenciales inválidas', 'error');
  }
});

function showDashboard(role) {
  document.getElementById('loginPage').classList.remove('active');
  
  if (role === 'student') {
    document.getElementById('studentDashboard').classList.add('active');
    document.getElementById('studentName').textContent = currentUser.name;
    loadStudentProjects();
  } else if (role === 'coordinator') {
    document.getElementById('coordinatorDashboard').classList.add('active');
    document.getElementById('coordinatorName').textContent = currentUser.name;
    loadCoordinatorDashboard();
  } else if (role === 'director') {
    document.getElementById('directorDashboard').classList.add('active');
    document.getElementById('directorName').textContent = currentUser.name;
    loadDirectorProjects();
  } else if (role === 'jury') {
    document.getElementById('juryDashboard').classList.add('active');
    document.getElementById('juryName').textContent = currentUser.name;
    loadJuryProjects();
  }
}

function logout() {
  currentUser = null;
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('loginPage').classList.add('active');
  document.getElementById('loginForm').reset();
  showToast('Sesión cerrada');
}

// Student Functions
function showStudentSection(section) {
  document.querySelectorAll('#studentDashboard .section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#studentDashboard .sidebar-menu a').forEach(a => a.classList.remove('active'));
  
  if (section === 'projects') {
    document.getElementById('studentProjects').classList.add('active');
    loadStudentProjects();
  }
  
  event.target.classList.add('active');
}

function loadStudentProjects() {
  const studentProjects = projects.filter(p => p.student === currentUser.name);
  const container = document.getElementById('studentProjectsList');
  
  if (studentProjects.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-text">No tienes proyectos registrados</div>
        <button class="btn btn--primary" onclick="openRegisterModal()" style="margin-top: 16px;">Registrar Proyecto</button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = studentProjects.map(project => `
    <div class="project-card">
      <h3 class="project-title">${project.title}</h3>
      <div class="project-meta">
        <div><strong>Fase:</strong> ${project.phase}</div>
        <div><strong>Estado:</strong> <span class="status ${getStatusClass(project.status)}">${project.status}</span></div>
        <div><strong>Director:</strong> ${project.director}</div>
        <div><strong>Fecha registro:</strong> ${formatDate(project.createdDate)}</div>
        ${project.defenseDate ? `<div><strong>Sustentación:</strong> ${formatDate(project.defenseDate)}</div>` : ''}
      </div>
      
      ${project.deliverables.length > 0 ? `
        <div class="deliverables-list">
          <strong>Entregables:</strong>
          ${project.deliverables.map(d => `
            <div class="deliverable-item">
              <div class="deliverable-info">
                <div class="deliverable-name">${d.name}</div>
                <div class="deliverable-meta">${d.phase} - ${formatDate(d.uploadDate)}</div>
              </div>
              <span class="status ${getStatusClass(d.status || 'Pendiente')}">${d.status || 'Pendiente'}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${project.observations.length > 0 ? `
        <div class="observations-list">
          <strong>Observaciones:</strong>
          ${project.observations.map(obs => `
            <div class="observation-item">
              <div class="observation-header">
                <span class="observation-author">${obs.author}</span>
                <span class="observation-date">${formatDate(obs.date)}</span>
              </div>
              <div class="observation-text">${obs.text}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      <div class="project-actions">
        <button class="btn btn--sm btn--primary" onclick="openDeliverableModal(${project.id})">Cargar Entregable</button>
        <button class="btn btn--sm btn--outline" onclick="viewProjectDetails(${project.id})">Ver Detalles</button>
      </div>
    </div>
  `).join('');
}

function openRegisterModal() {
  openModal('registerModal');
}

document.getElementById('registerProjectForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const newProject = {
    id: projectIdCounter++,
    title: document.getElementById('projectTitle').value,
    description: document.getElementById('projectDescription').value,
    objectives: document.getElementById('projectObjectives').value,
    authors: document.getElementById('projectAuthors').value,
    student: currentUser.name,
    director: document.getElementById('projectDirector').value,
    jury: [],
    phase: 'Anteproyecto',
    status: 'Pendiente',
    deliverables: [],
    observations: [],
    evaluations: [],
    defenseDate: null,
    defenseLocation: null,
    createdDate: new Date().toISOString().split('T')[0]
  };
  
  projects.push(newProject);
  closeModal('registerModal');
  this.reset();
  loadStudentProjects();
  showToast('Proyecto registrado exitosamente');
});

function openDeliverableModal(projectId) {
  document.getElementById('deliverableProjectId').value = projectId;
  openModal('deliverableModal');
}

document.getElementById('uploadDeliverableForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('deliverableProjectId').value);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    const fileInput = document.getElementById('deliverableFile');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'documento.pdf';
    
    const newDeliverable = {
      id: project.deliverables.length + 1,
      name: document.getElementById('deliverableName').value,
      phase: document.getElementById('deliverablePhase').value,
      fileName: fileName,
      uploadDate: new Date().toISOString(),
      status: 'Pendiente'
    };
    
    project.deliverables.push(newDeliverable);
    project.status = 'En Revisión';
    
    closeModal('deliverableModal');
    this.reset();
    loadStudentProjects();
    showToast('Entregable cargado exitosamente');
  }
});

function viewProjectDetails(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (project) {
    alert(`Proyecto: ${project.title}\n\nDescripción: ${project.description}\n\nObjetivos: ${project.objectives}\n\nEstado: ${project.status}\n\nFase: ${project.phase}`);
  }
}

// Coordinator Functions
function showCoordinatorSection(section) {
  document.querySelectorAll('#coordinatorDashboard .section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#coordinatorDashboard .sidebar-menu a').forEach(a => a.classList.remove('active'));
  
  if (section === 'overview') {
    document.getElementById('coordinatorOverview').classList.add('active');
    loadCoordinatorOverview();
  } else if (section === 'projects') {
    document.getElementById('coordinatorProjects').classList.add('active');
    loadAllProjects();
  } else if (section === 'assign') {
    document.getElementById('coordinatorAssign').classList.add('active');
    loadAssignJury();
  } else if (section === 'schedule') {
    document.getElementById('coordinatorSchedule').classList.add('active');
    loadScheduleDefense();
  } else if (section === 'certificates') {
    document.getElementById('coordinatorCertificates').classList.add('active');
    loadCertificates();
  }
  
  event.target.classList.add('active');
}

function loadCoordinatorDashboard() {
  loadCoordinatorOverview();
}

function loadCoordinatorOverview() {
  document.getElementById('totalProjects').textContent = projects.length;
  document.getElementById('pendingProjects').textContent = projects.filter(p => p.status === 'Pendiente').length;
  document.getElementById('reviewProjects').textContent = projects.filter(p => p.status === 'En Revisión').length;
  document.getElementById('approvedProjects').textContent = projects.filter(p => p.status === 'Aprobado').length;
  
  const recentProjects = projects.slice(-5).reverse();
  document.getElementById('recentProjectsList').innerHTML = `
    <table class="projects-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Estudiante</th>
          <th>Estado</th>
          <th>Fase</th>
        </tr>
      </thead>
      <tbody>
        ${recentProjects.map(p => `
          <tr>
            <td>${p.title}</td>
            <td>${p.student}</td>
            <td><span class="status ${getStatusClass(p.status)}">${p.status}</span></td>
            <td>${p.phase}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function loadAllProjects() {
  renderProjectsTable(projects);
  
  document.getElementById('searchProjects').addEventListener('input', filterProjects);
  document.getElementById('filterStatus').addEventListener('change', filterProjects);
}

function filterProjects() {
  const searchTerm = document.getElementById('searchProjects').value.toLowerCase();
  const statusFilter = document.getElementById('filterStatus').value;
  
  let filtered = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm) || 
                         p.student.toLowerCase().includes(searchTerm);
    const matchesStatus = !statusFilter || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  
  renderProjectsTable(filtered);
}

function renderProjectsTable(projectsList) {
  const container = document.getElementById('allProjectsList');
  
  if (projectsList.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No se encontraron proyectos</div></div>';
    return;
  }
  
  container.innerHTML = `
    <table class="projects-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Estudiante</th>
          <th>Director</th>
          <th>Fase</th>
          <th>Estado</th>
          <th>Jurados</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${projectsList.map(p => `
          <tr>
            <td>${p.id}</td>
            <td>${p.title}</td>
            <td>${p.student}</td>
            <td>${p.director}</td>
            <td>${p.phase}</td>
            <td><span class="status ${getStatusClass(p.status)}">${p.status}</span></td>
            <td>${p.jury.length > 0 ? p.jury.join(', ') : 'Sin asignar'}</td>
            <td>
              <button class="btn btn--sm btn--outline" onclick="viewProjectDetails(${p.id})">Ver</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function loadAssignJury() {
  const projectsWithoutJury = projects.filter(p => p.jury.length === 0);
  const container = document.getElementById('assignJuryList');
  
  if (projectsWithoutJury.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">Todos los proyectos tienen jurados asignados</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${projectsWithoutJury.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Director:</strong> ${p.director}</div>
            <div><strong>Estado:</strong> <span class="status ${getStatusClass(p.status)}">${p.status}</span></div>
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--primary" onclick="openAssignJuryModal(${p.id})">Asignar Jurados</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openAssignJuryModal(projectId) {
  document.getElementById('assignJuryProjectId').value = projectId;
  document.querySelectorAll('#assignJuryForm input[type="checkbox"]').forEach(cb => cb.checked = false);
  openModal('assignJuryModal');
}

document.getElementById('assignJuryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('assignJuryProjectId').value);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    const selectedJury = Array.from(document.querySelectorAll('#assignJuryForm input[type="checkbox"]:checked'))
      .map(cb => cb.value);
    
    if (selectedJury.length < 2) {
      showToast('Debe seleccionar al menos 2 jurados', 'error');
      return;
    }
    
    project.jury = selectedJury;
    closeModal('assignJuryModal');
    loadAssignJury();
    showToast('Jurados asignados exitosamente');
  }
});

function loadScheduleDefense() {
  const projectsToSchedule = projects.filter(p => p.jury.length > 0 && !p.defenseDate);
  const container = document.getElementById('scheduleDefenseList');
  
  if (projectsToSchedule.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No hay proyectos pendientes de programación</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${projectsToSchedule.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Jurados:</strong> ${p.jury.join(', ')}</div>
            <div><strong>Estado:</strong> <span class="status ${getStatusClass(p.status)}">${p.status}</span></div>
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--primary" onclick="openScheduleModal(${p.id})">Programar Sustentación</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openScheduleModal(projectId) {
  document.getElementById('scheduleProjectId').value = projectId;
  openModal('scheduleModal');
}

document.getElementById('scheduleDefenseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('scheduleProjectId').value);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    project.defenseDate = document.getElementById('defenseDate').value;
    project.defenseLocation = document.getElementById('defenseLocation').value;
    
    closeModal('scheduleModal');
    this.reset();
    loadScheduleDefense();
    showToast('Sustentación programada exitosamente');
  }
});

function loadCertificates() {
  const completedProjects = projects.filter(p => p.evaluations && p.evaluations.length > 0);
  const container = document.getElementById('certificatesList');
  
  if (completedProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No hay proyectos con evaluaciones completadas</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${completedProjects.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Calificación promedio:</strong> ${calculateAverageGrade(p.evaluations)}</div>
            <div><strong>Fecha sustentación:</strong> ${formatDate(p.defenseDate)}</div>
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--primary" onclick="generateCertificate(${p.id})">Ver Acta</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function calculateAverageGrade(evaluations) {
  if (!evaluations || evaluations.length === 0) return 'N/A';
  const sum = evaluations.reduce((acc, ev) => acc + ev.grade, 0);
  return (sum / evaluations.length).toFixed(1);
}

function generateCertificate(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const avgGrade = calculateAverageGrade(project.evaluations);
  const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  
  const certificateContent = `
    <h2>ACTA DE EVALUACIÓN DE PROYECTO DE GRADO</h2>
    <p style="text-align: center; margin-bottom: 32px;">No. ${project.id.toString().padStart(4, '0')}</p>
    
    <p>El día ${formatDate(project.defenseDate)}, en ${project.defenseLocation || 'las instalaciones de la universidad'}, 
    se llevó a cabo la sustentación del proyecto de grado titulado:</p>
    
    <p style="text-align: center; font-weight: bold; margin: 24px 0;">${project.title.toUpperCase()}</p>
    
    <p><strong>Presentado por:</strong> ${project.authors || project.student}</p>
    <p><strong>Director:</strong> ${project.director}</p>
    <p><strong>Jurados evaluadores:</strong> ${project.jury.join(', ')}</p>
    
    <div style="margin: 32px 0;">
      <p><strong>EVALUACIONES:</strong></p>
      ${project.evaluations.map(ev => `
        <p>• ${ev.evaluator}: ${ev.grade}/100 - ${ev.comments}</p>
      `).join('')}
    </div>
    
    <p><strong>Calificación final:</strong> ${avgGrade}/100</p>
    <p><strong>Resultado:</strong> ${parseFloat(avgGrade) >= 70 ? 'APROBADO' : 'NO APROBADO'}</p>
    
    <p style="margin-top: 48px;">Para constancia se firma el acta en la fecha mencionada.</p>
    
    <div class="certificate-signatures">
      <div class="signature-block">
        <div class="signature-line"></div>
        <p>${project.director}</p>
        <p>Director</p>
      </div>
      ${project.jury.map(j => `
        <div class="signature-block">
          <div class="signature-line"></div>
          <p>${j}</p>
          <p>Jurado</p>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('certificateContent').innerHTML = certificateContent;
  openModal('certificateModal');
}

function downloadCertificate() {
  showToast('Generando PDF... (Simulación)');
  setTimeout(() => {
    showToast('PDF descargado exitosamente');
  }, 1000);
}

// Director Functions
function showDirectorSection(section) {
  document.querySelectorAll('#directorDashboard .section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#directorDashboard .sidebar-menu a').forEach(a => a.classList.remove('active'));
  
  if (section === 'projects') {
    document.getElementById('directorProjects').classList.add('active');
    loadDirectorProjects();
  } else if (section === 'review') {
    document.getElementById('directorReview').classList.add('active');
    loadDirectorReview();
  }
  
  event.target.classList.add('active');
}

function loadDirectorProjects() {
  const directorProjects = projects.filter(p => p.director === currentUser.name);
  const container = document.getElementById('directorProjectsList');
  
  if (directorProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No tienes proyectos asignados</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${directorProjects.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Fase:</strong> ${p.phase}</div>
            <div><strong>Estado:</strong> <span class="status ${getStatusClass(p.status)}">${p.status}</span></div>
            <div><strong>Entregables:</strong> ${p.deliverables.length}</div>
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--outline" onclick="viewProjectDetails(${p.id})">Ver Detalles</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function loadDirectorReview() {
  const directorProjects = projects.filter(p => p.director === currentUser.name && p.deliverables.length > 0);
  const container = document.getElementById('directorReviewList');
  
  if (directorProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No hay entregables pendientes de revisión</div></div>';
    return;
  }
  
  container.innerHTML = directorProjects.map(project => `
    <div class="card" style="margin-bottom: 24px;">
      <div class="card__body">
        <h3>${project.title}</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Estudiante: ${project.student}</p>
        
        <div class="deliverables-list">
          <strong>Entregables:</strong>
          ${project.deliverables.map(d => `
            <div class="deliverable-item">
              <div class="deliverable-info">
                <div class="deliverable-name">${d.name}</div>
                <div class="deliverable-meta">
                  ${d.phase} - ${d.fileName} - ${formatDate(d.uploadDate)}
                </div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <span class="status ${getStatusClass(d.status || 'Pendiente')}">${d.status || 'Pendiente'}</span>
                ${!d.status || d.status === 'Pendiente' ? `
                  <button class="btn btn--sm btn--primary" onclick="openObservationModal(${project.id}, ${d.id})">Revisar</button>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function openObservationModal(projectId, deliverableId) {
  document.getElementById('observationProjectId').value = projectId;
  document.getElementById('observationDeliverableId').value = deliverableId;
  openModal('observationModal');
}

document.getElementById('addObservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('observationProjectId').value);
  const deliverableId = parseInt(document.getElementById('observationDeliverableId').value);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    const deliverable = project.deliverables.find(d => d.id === deliverableId);
    const action = document.getElementById('observationAction').value;
    
    const observation = {
      id: project.observations.length + 1,
      author: currentUser.name,
      text: document.getElementById('observationText').value,
      date: new Date().toISOString(),
      action: action
    };
    
    project.observations.push(observation);
    
    if (deliverable) {
      if (action === 'approve') {
        deliverable.status = 'Aprobado';
        project.status = 'Aprobado';
      } else if (action === 'reject') {
        deliverable.status = 'Rechazado';
        project.status = 'Rechazado';
      } else {
        deliverable.status = 'En Revisión';
      }
    }
    
    closeModal('observationModal');
    this.reset();
    loadDirectorReview();
    showToast('Observación registrada exitosamente');
  }
});

// Jury Functions
function showJurySection(section) {
  document.querySelectorAll('#juryDashboard .section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#juryDashboard .sidebar-menu a').forEach(a => a.classList.remove('active'));
  
  if (section === 'projects') {
    document.getElementById('juryProjects').classList.add('active');
    loadJuryProjects();
  } else if (section === 'evaluate') {
    document.getElementById('juryEvaluate').classList.add('active');
    loadJuryEvaluate();
  } else if (section === 'history') {
    document.getElementById('juryHistory').classList.add('active');
    loadJuryHistory();
  }
  
  event.target.classList.add('active');
}

function loadJuryProjects() {
  const juryProjects = projects.filter(p => p.jury.includes(currentUser.name));
  const container = document.getElementById('juryProjectsList');
  
  if (juryProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No tienes proyectos asignados</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${juryProjects.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Director:</strong> ${p.director}</div>
            <div><strong>Fase:</strong> ${p.phase}</div>
            <div><strong>Estado:</strong> <span class="status ${getStatusClass(p.status)}">${p.status}</span></div>
            ${p.defenseDate ? `<div><strong>Sustentación:</strong> ${formatDate(p.defenseDate)}</div>` : '<div><strong>Sustentación:</strong> No programada</div>'}
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--outline" onclick="viewProjectDetails(${p.id})">Ver Detalles</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function loadJuryEvaluate() {
  const juryProjects = projects.filter(p => 
    p.jury.includes(currentUser.name) && 
    p.defenseDate && 
    new Date(p.defenseDate) <= new Date() &&
    (!p.evaluations || !p.evaluations.find(ev => ev.evaluator === currentUser.name))
  );
  
  const container = document.getElementById('juryEvaluateList');
  
  if (juryProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No hay proyectos pendientes de evaluación</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${juryProjects.map(p => `
        <div class="project-card">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-meta">
            <div><strong>Estudiante:</strong> ${p.student}</div>
            <div><strong>Director:</strong> ${p.director}</div>
            <div><strong>Sustentación:</strong> ${formatDate(p.defenseDate)}</div>
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--primary" onclick="openEvaluationModal(${p.id})">Evaluar Proyecto</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openEvaluationModal(projectId) {
  document.getElementById('evaluationProjectId').value = projectId;
  openModal('evaluationModal');
}

document.getElementById('evaluateProjectForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('evaluationProjectId').value);
  const project = projects.find(p => p.id === projectId);
  
  if (project) {
    if (!project.evaluations) {
      project.evaluations = [];
    }
    
    const evaluation = {
      id: project.evaluations.length + 1,
      evaluator: currentUser.name,
      grade: parseInt(document.getElementById('evaluationGrade').value),
      comments: document.getElementById('evaluationComments').value,
      date: new Date().toISOString()
    };
    
    project.evaluations.push(evaluation);
    
    if (project.evaluations.length === project.jury.length) {
      project.status = 'Finalizado';
    }
    
    closeModal('evaluationModal');
    this.reset();
    loadJuryEvaluate();
    loadJuryHistory();
    showToast('Evaluación registrada exitosamente');
  }
});

function loadJuryHistory() {
  const evaluatedProjects = projects.filter(p => 
    p.evaluations && p.evaluations.find(ev => ev.evaluator === currentUser.name)
  );
  
  const container = document.getElementById('juryHistoryList');
  
  if (evaluatedProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No has evaluado ningún proyecto aún</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="projects-grid">
      ${evaluatedProjects.map(p => {
        const myEvaluation = p.evaluations.find(ev => ev.evaluator === currentUser.name);
        return `
          <div class="project-card">
            <h3 class="project-title">${p.title}</h3>
            <div class="project-meta">
              <div><strong>Estudiante:</strong> ${p.student}</div>
              <div><strong>Tu calificación:</strong> ${myEvaluation.grade}/100</div>
              <div><strong>Fecha evaluación:</strong> ${formatDate(myEvaluation.date)}</div>
              <div><strong>Comentarios:</strong> ${myEvaluation.comments}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Initialize
window.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
});