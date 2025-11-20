let currentUser = null;
let projects = [
  {
    id: 1,
    title: "Sistema de gestión académica",
    description: "Plataforma web para gestión de cursos y calificaciones",
    objectives: "Desarrollar plataforma completa, mejorar procesos académicos",
    authors: "Juan Pérez, Andrea López",
    student: "Juan Pérez",
    director: "Dr. López",
    jury: ["Dra. Martínez", "Dr. Rodríguez"],
    phase: "Anteproyecto",
    status: "En Revisión",
    horaDefensa: "10:00",
    lugar: "Sala 101",
    deliverables: [
      {
        id: 1,
        name: "Propuesta inicial",
        phase: "Anteproyecto",
        fileName: "propuesta_v1.pdf",
        uploadDate: "2025-10-15",
        status: "Aprobado",
        comentariosDirector: [
          {
            contenido: "Excelente propuesta. Los objetivos están bien definidos.",
            fecha: "2025-10-16",
            sugerencias: "Detallar el cronograma más específicamente",
            estado: "Aprobado"
          }
        ],
        comentariosJurado: [
          {
            contenido: "Idea interesante y viable. Buen potencial de impacto.",
            fecha: "2025-10-18",
            tipo: "satisfactorio"
          }
        ]
      },
      {
        id: 2,
        name: "Marco teórico",
        phase: "Anteproyecto",
        fileName: "marco_teorico_v1.pdf",
        uploadDate: "2025-10-18",
        status: "Aprobado",
        comentariosDirector: [
          {
            contenido: "Buena revisión de literatura. Bases sólidas para el proyecto.",
            fecha: "2025-10-19",
            sugerencias: "",
            estado: "Aprobado"
          }
        ],
        comentariosJurado: [
          {
            contenido: "Marco teórico completo y bien estructurado.",
            fecha: "2025-10-20",
            tipo: "satisfactorio"
          }
        ]
      }
    ],
    observations: [
      {
        id: 1,
        titulo: "Incluir comparativa de tecnologías",
        contenido: "Es importante comparar las diferentes tecnologías disponibles y justificar la selección",
        tipo: "Tecnología",
        prioridad: "Alta",
        fecha: "2025-10-17",
        emisor: "Dr. López"
      }
    ],
    evaluations: [
      {
        id: 1,
        evaluator: "Dra. Martínez",
        grade: 85,
        comments: "Excelente proyecto con implementación completa. Buena arquitectura y documentación clara.",
        fortalezas: "Buena arquitectura, interfaz intuitiva, documentación clara",
        mejoras: "Podría mejorar el rendimiento en consultas grandes",
        recomendaciones: "Considerar agregar más módulos de reportería",
        date: "2025-10-21"
      }
    ],
    defenseDate: "2025-12-15",
    defenseLocation: null,
    createdDate: "2025-10-10"
  },
  {
    id: 2,
    title: "App de seguimiento de salud",
    description: "Aplicación móvil para monitoreo de parámetros de salud",
    objectives: "Crear app intuitiva, usar IA para alertas, sincronizar con dispositivos",
    authors: "María González, Ana Martínez",
    student: "María González",
    director: "Dra. Fernández",
    jury: ["Dr. Sánchez"],
    phase: "Desarrollo",
    status: "En Revisión",
    horaDefensa: null,
    lugar: null,
    deliverables: [
      {
        id: 3,
        name: "Propuesta inicial",
        phase: "Anteproyecto",
        fileName: "propuesta_salud_v1.pdf",
        uploadDate: "2025-11-01",
        status: "Aprobado",
        comentariosDirector: [
          {
            contenido: "Buena idea. Revisar requisitos de privacidad y seguridad de datos",
            fecha: "2025-11-02",
            sugerencias: "Incluir análisis de cumplimiento GDPR",
            estado: "Aprobado"
          }
        ],
        comentariosJurado: []
      },
      {
        id: 4,
        name: "Documento avance 1",
        phase: "Desarrollo",
        fileName: "avance1_salud.pdf",
        uploadDate: "2025-11-10",
        status: "Pendiente",
        comentariosDirector: [
          {
            contenido: "Falta especificar los algoritmos de IA para las alertas",
            fecha: "2025-11-11",
            sugerencias: "Agregar diagramas de flujo y pseudocódigo de algoritmos",
            estado: "Pendiente"
          }
        ],
        comentariosJurado: []
      }
    ],
    observations: [
      {
        id: 2,
        titulo: "Evaluar impacto regulatorio",
        contenido: "La aplicación manejará datos de salud sensibles. Necesita evaluación de impacto regulatorio",
        tipo: "Normativa",
        prioridad: "Alta",
        fecha: "2025-11-03",
        emisor: "Dra. Fernández"
      }
    ],
    evaluations: [],
    defenseDate: null,
    defenseLocation: null,
    createdDate: "2025-11-01"
  },
  {
    id: 3,
    title: "Sistema de recomendación de libros",
    description: "Plataforma web con algoritmos de ML para recomendar libros",
    objectives: "Implementar sistema de filtrado colaborativo, mejorar experiencia de usuario",
    authors: "Carlos Rodríguez",
    student: "Carlos Rodríguez",
    director: null,
    jury: [],
    phase: "Anteproyecto",
    status: "Pendiente",
    horaDefensa: null,
    lugar: null,
    deliverables: [],
    observations: [],
    evaluations: [],
    defenseDate: null,
    defenseLocation: null,
    createdDate: "2025-11-05"
  },
  {
    id: 4,
    title: "Chatbot para atención al cliente",
    description: "Asistente virtual con procesamiento de lenguaje natural",
    objectives: "Automatizar respuestas frecuentes, mejorar experiencia usuario, reducir carga operativa",
    authors: "Laura Díaz, Pedro Gómez",
    student: "Laura Díaz",
    director: "Dr. García",
    jury: ["Dra. Martínez", "Dr. Sánchez"],
    phase: "Sustentación",
    status: "Finalizado",
    horaDefensa: "14:30",
    lugar: "Auditorio A",
    deliverables: [
      {
        id: 5,
        name: "Propuesta inicial",
        phase: "Anteproyecto",
        fileName: "propuesta_chatbot.pdf",
        uploadDate: "2025-09-20",
        status: "Aprobado",
        comentariosDirector: [
          {
            contenido: "Excelente propuesta. Proceder a desarrollo",
            fecha: "2025-09-22",
            sugerencias: "",
            estado: "Aprobado"
          }
        ],
        comentariosJurado: [
          {
            contenido: "Proyecto viable y con buen potencial comercial",
            fecha: "2025-09-23",
            tipo: "satisfactorio"
          }
        ]
      },
      {
        id: 6,
        name: "Código fuente y documentación",
        phase: "Sustentación",
        fileName: "codigo_chatbot_final.zip",
        uploadDate: "2025-11-25",
        status: "Aprobado",
        comentariosDirector: [
          {
            contenido: "Código bien estructurado, documentación completa. Aprobado para sustentación",
            fecha: "2025-11-26",
            sugerencias: "",
            estado: "Aprobado"
          }
        ],
        comentariosJurado: [
          {
            contenido: "Implementación profesional. Cumple todos los requisitos",
            fecha: "2025-11-27",
            tipo: "satisfactorio"
          }
        ]
      }
    ],
    observations: [
      {
        id: 3,
        titulo: "Implementación de seguridad",
        contenido: "Excelente implementación de medidas de seguridad en la comunicación",
        tipo: "General",
        prioridad: "Media",
        fecha: "2025-11-26",
        emisor: "Dr. García"
      }
    ],
    evaluations: [
      {
        id: 1,
        evaluator: "Dra. Martínez",
        grade: 95,
        comments: "Proyecto excepcional. Muy profesional y completo. Excelente arquitectura y documentación.",
        fortalezas: "Código limpio, buena arquitectura, interfaz amigable, documentación excelente",
        mejoras: "Podría expandirse a más idiomas en el futuro",
        recomendaciones: "Considerar comercializar la solución",
        date: "2025-11-27"
      },
      {
        id: 2,
        evaluator: "Dr. Sánchez",
        grade: 92,
        comments: "Trabajo muy bien ejecutado con resultados sólidos.",
        fortalezas: "Buen análisis del problema, solución efectiva, buenas pruebas",
        mejoras: "Mejorar la documentación de APIs",
        recomendaciones: "Publicar resultados en conferencia",
        date: "2025-11-27"
      }
    ],
    defenseDate: "2025-11-28T14:30",
    defenseLocation: "Auditorio A",
    createdDate: "2025-09-15"
  }
];

const users = [
  { id: 1, username: "estudiante1", password: "123", role: "student", name: "Juan Pérez" },
  { id: 2, username: "estudiante2", password: "123", role: "student", name: "María González" },
  { id: 3, username: "estudiante3", password: "123", role: "student", name: "Carlos Rodríguez" },
  { id: 10, username: "coord1", password: "123", role: "coordinator", name: "Coordinador García" },
  { id: 20, username: "director1", password: "123", role: "director", name: "Dr. López" },
  { id: 21, username: "director2", password: "123", role: "director", name: "Dra. Fernández" },
  { id: 22, username: "director3", password: "123", role: "director", name: "Dr. García" },
  { id: 23, username: "director4", password: "123", role: "director", name: "Dra. Ramírez" },
  { id: 30, username: "jurado1", password: "123", role: "jury", name: "Dra. Martínez" },
  { id: 31, username: "jurado2", password: "123", role: "jury", name: "Dr. Rodríguez" },
  { id: 32, username: "jurado3", password: "123", role: "jury", name: "Dr. Sánchez" },
  { id: 33, username: "jurado4", password: "123", role: "jury", name: "Dra. Torres" }
];

const juryMembers = ["Dra. Martínez", "Dr. Rodríguez", "Dr. Sánchez", "Dra. Torres"];
const directors = ["Dr. López", "Dra. Fernández", "Dr. García", "Dra. Ramírez"];

let projectIdCounter = projects.length + 1;
let revisionHistorial = [];
let revisionIdCounter = 1;

// Utility Functions
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}

function getProjectProgress(project) {
  let progress = 0;
  
  if (project.phase === 'Anteproyecto') {
    progress = project.deliverables.filter(d => d.status === 'Aprobado').length > 0 ? 25 : 10;
  } else if (project.phase === 'Desarrollo') {
    progress = 25 + (project.deliverables.filter(d => d.status === 'Aprobado' && d.phase === 'Desarrollo').length * 15);
  } else if (project.phase === 'Sustentación') {
    progress = 75;
    if (project.evaluations && project.evaluations.length > 0) {
      progress = 100;
    }
  }
  
  return Math.min(progress, 100);
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

function animateValue(id, start, end, duration) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

function calculateAverageGrade(evaluations) {
  if (!evaluations || evaluations.length === 0) return 'N/A';
  const sum = evaluations.reduce((acc, ev) => acc + ev.grade, 0);
  return (sum / evaluations.length).toFixed(1);
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
    loadStudentFeedback();
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
  } else if (section === 'feedback') {
    document.getElementById('studentFeedback').classList.add('active');
    loadStudentFeedback();
  }
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
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
  
  container.innerHTML = studentProjects.map(project => {
    const progress = getProjectProgress(project);
    return `
    <div class="project-card">
      <h3 class="project-title">${project.title}</h3>
      <div class="project-meta">
        <div><strong>Fase:</strong> ${project.phase}</div>
        <div><strong>Estado:</strong> <span class="status ${getStatusClass(project.status)}">${project.status}</span></div>
        <div><strong>Director:</strong> ${project.director || '<span style="color: var(--color-warning);">Sin asignar</span>'}</div>
        <div><strong>Jurados:</strong> ${project.jury.length > 0 ? project.jury.join(', ') : 'Sin asignar'}</div>
        <div><strong>Fecha registro:</strong> ${formatDate(project.createdDate)}</div>
        ${project.defenseDate ? `<div><strong>Sustentación:</strong> ${formatDate(project.defenseDate)}</div>` : ''}
      </div>
      
      <div style="margin: 16px 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="font-size: 12px; color: var(--color-text-secondary);">Progreso del proyecto</span>
          <span style="font-size: 12px; font-weight: 600; color: var(--color-primary);">${progress}%</span>
        </div>
        <div style="width: 100%; height: 8px; background: var(--color-secondary); border-radius: 4px; overflow: hidden;">
          <div style="width: ${progress}%; height: 100%; background: var(--color-primary); transition: width 0.3s;"></div>
        </div>
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
  `}).join('');
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
    director: null,
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
    const progress = getProjectProgress(project);
    const details = `
PROYECTO: ${project.title}

DESCRIPCIÓN: ${project.description}

OBJETIVOS: ${project.objectives}

ESTADO: ${project.status}
FASE: ${project.phase}
PROGRESO: ${progress}%

ESTUDIANTE: ${project.student}
DIRECTOR: ${project.director || 'Sin asignar'}
${project.jury.length > 0 ? `JURADOS: ${project.jury.join(', ')}` : 'JURADOS: No asignados'}

ENTREGABLES: ${project.deliverables.length}
OBSERVACIONES: ${project.observations.length}
${project.evaluations && project.evaluations.length > 0 ? `CALIFICACIÓN PROMEDIO: ${calculateAverageGrade(project.evaluations)}` : ''}
${project.defenseDate ? `\nSUSTENTACIÓN: ${formatDate(project.defenseDate)}${project.defenseLocation ? ` en ${project.defenseLocation}` : ''}` : ''}
    `;
    alert(details);
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
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function loadCoordinatorDashboard() {
  loadCoordinatorOverview();
}

function loadCoordinatorOverview() {
  const totalProjects = projects.length;
  const pendingProjects = projects.filter(p => p.status === 'Pendiente').length;
  const reviewProjects = projects.filter(p => p.status === 'En Revisión').length;
  const approvedProjects = projects.filter(p => p.status === 'Aprobado' || p.status === 'Finalizado').length;
  
  animateValue('totalProjects', 0, totalProjects, 800);
  animateValue('pendingProjects', 0, pendingProjects, 800);
  animateValue('reviewProjects', 0, reviewProjects, 800);
  animateValue('approvedProjects', 0, approvedProjects, 800);
  
  const recentProjects = projects.slice(-5).reverse();
  document.getElementById('recentProjectsList').innerHTML = `
    <table class="projects-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Estudiante</th>
          <th>Director</th>
          <th>Estado</th>
          <th>Fase</th>
        </tr>
      </thead>
      <tbody>
        ${recentProjects.map(p => `
          <tr>
            <td>${p.title}</td>
            <td>${p.student}</td>
            <td>${p.director || '<span style="color: var(--color-warning);">Sin asignar</span>'}</td>
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
  
  const searchInput = document.getElementById('searchProjects');
  const filterSelect = document.getElementById('filterStatus');
  
  searchInput.removeEventListener('input', filterProjects);
  filterSelect.removeEventListener('change', filterProjects);
  
  searchInput.addEventListener('input', filterProjects);
  filterSelect.addEventListener('change', filterProjects);
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
            <td>${p.director || '<span style="color: var(--color-warning);">Sin asignar</span>'}</td>
            <td>${p.phase}</td>
            <td><span class="status ${getStatusClass(p.status)}">${p.status}</span></td>
            <td>${p.jury.length > 0 ? p.jury.join(', ') : 'Sin asignar'}</td>
            <td>
              <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                <button class="btn btn--sm btn--primary" onclick="openAssignDirectorModal(${p.id})" title="Asignar/Cambiar Director">${p.director ? 'Cambiar' : 'Asignar'} Dir.</button>
                ${p.director && p.jury.length === 0 ? `<button class="btn btn--sm btn--outline" onclick="openAssignJuryModal(${p.id})" title="Asignar Jurados">Asig. Jur.</button>` : ''}
                <button class="btn btn--sm btn--outline" onclick="viewProjectDetails(${p.id})">Ver</button>
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function openAssignDirectorModal(projectId) {
  document.getElementById('assignDirectorProjectId').value = projectId;
  const project = projects.find(p => p.id === projectId);
  document.getElementById('directorSelect').value = project && project.director ? project.director : '';
  openModal('assignDirectorModal');
}

document.getElementById('assignDirectorForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const projectId = parseInt(document.getElementById('assignDirectorProjectId').value);
  const project = projects.find(p => p.id === projectId);
  const selectedDirector = document.getElementById('directorSelect').value;
  
  if (project && selectedDirector) {
    const oldDirector = project.director;
    project.director = selectedDirector;
    
    closeModal('assignDirectorModal');
    loadAllProjects();
    loadCoordinatorOverview();
    
    if (oldDirector) {
      showToast(`Director cambiado de ${oldDirector} a ${selectedDirector}`);
    } else {
      showToast(`Director ${selectedDirector} asignado exitosamente`);
    }
  }
});

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
            <div><strong>Director:</strong> ${p.director || '<span style="color: var(--color-warning);">Sin asignar</span>'}</div>
            <div><strong>Estado:</strong> <span class="status ${getStatusClass(p.status)}">${p.status}</span></div>
          </div>
          <div class="project-actions">
            ${!p.director ? `<button class="btn btn--sm btn--outline" onclick="openAssignDirectorModal(${p.id})">Asignar Director Primero</button>` : `<button class="btn btn--sm btn--primary" onclick="openAssignJuryModal(${p.id})">Asignar Jurados</button>`}
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
    loadAllProjects();
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
            <div><strong>Director:</strong> ${p.director}</div>
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

function generateCertificate(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  const avgGrade = calculateAverageGrade(project.evaluations);
  const defenseInfo = project.defenseDate ? formatDate(project.defenseDate) : 'fecha por programar';
  const location = project.lugar || project.defenseLocation || 'las instalaciones de la universidad';
  
  const certificateContent = `
    <h2>ACTA DE EVALUACIÓN DE PROYECTO DE GRADO</h2>
    <p style="text-align: center; margin-bottom: 32px;">No. ${project.id.toString().padStart(4, '0')}</p>
    
    <p>El día ${defenseInfo}, en ${location}, 
    se llevó a cabo la sustentación del proyecto de grado titulado:</p>
    
    <p style="text-align: center; font-weight: bold; margin: 24px 0;">${project.title.toUpperCase()}</p>
    
    <p><strong>Presentado por:</strong> ${project.authors || project.student}</p>
    <p><strong>Director:</strong> ${project.director}</p>
    <p><strong>Jurados evaluadores:</strong> ${project.jury.join(', ')}</p>
    
    <div style="margin: 32px 0;">
      <p><strong>EVALUACIONES DETALLADAS:</strong></p>
      ${project.evaluations.map(ev => `
        <div style="margin: 16px 0; padding: 12px; background: rgba(0,0,0,0.05); border-left: 3px solid #000;">
          <p style="font-weight: bold;">${ev.evaluator}: ${ev.grade}/100</p>
          <p style="margin: 8px 0;"><strong>Comentarios:</strong> ${ev.comments}</p>
          ${ev.fortalezas ? `<p style="margin: 4px 0;"><strong>Fortalezas:</strong> ${ev.fortalezas}</p>` : ''}
          ${ev.mejoras ? `<p style="margin: 4px 0;"><strong>Mejoras:</strong> ${ev.mejoras}</p>` : ''}
          ${ev.recomendaciones ? `<p style="margin: 4px 0;"><strong>Recomendaciones:</strong> ${ev.recomendaciones}</p>` : ''}
        </div>
      `).join('')}
    </div>
    
    <p style="font-size: 18px; font-weight: bold; margin: 24px 0;"><strong>Calificación final:</strong> ${avgGrade}/100</p>
    <p style="font-size: 16px; font-weight: bold;"><strong>Resultado:</strong> ${parseFloat(avgGrade) >= 70 ? 'APROBADO' : 'NO APROBADO'}</p>
    
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
  } else if (section === 'observations') {
    document.getElementById('directorObservations').classList.add('active');
    loadDirectorObservationsForm();
  } else if (section === 'history') {
    document.getElementById('directorHistory').classList.add('active');
    loadDirectorHistory();
  }
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
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
        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Estudiante: ${project.student} | Fase: ${project.phase}</p>
        
        <div class="deliverables-list">
          <h4 style="margin-bottom: 12px;">Entregables por Fase:</h4>
          ${['Anteproyecto', 'Desarrollo', 'Sustentación'].map(phase => {
            const phaseDeliverables = project.deliverables.filter(d => d.phase === phase);
            if (phaseDeliverables.length === 0) return '';
            return `
              <div style="margin-bottom: 16px;">
                <strong style="color: var(--color-primary);">${phase}:</strong>
                ${phaseDeliverables.map(d => `
                  <div class="deliverable-item">
                    <div class="deliverable-info">
                      <div class="deliverable-name">📄 ${d.name}</div>
                      <div class="deliverable-meta">
                        Archivo: ${d.fileName} | Cargado: ${formatDate(d.uploadDate)}
                      </div>
                    </div>
                    <div style="display: flex; gap: 8px; align-items: center;">
                      <span class="status ${getStatusClass(d.status || 'Pendiente')}">${d.status || 'Pendiente'}</span>
                      <button class="btn btn--sm btn--primary" onclick="openReviewDeliverableModal(${project.id}, ${d.id})">Revisar</button>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function openReviewDeliverableModal(projectId, deliverableId) {
  const project = projects.find(p => p.id === projectId);
  const deliverable = project?.deliverables.find(d => d.id === deliverableId);
  
  if (!project || !deliverable) return;
  
  const modalBody = document.getElementById('directorReviewDeliverableBody');
  
  // Contenido simulado del archivo
  const filePreview = `
Título: ${deliverable.name}
Proyecto: ${project.title}
Estudiante: ${project.student}
Fase: ${deliverable.phase}

==== CONTENIDO DEL DOCUMENTO ====

Este es un preview simulado del archivo "${deliverable.fileName}".

El documento contiene:
- Introducción al tema
- Marco teórico desarrollado
- Objetivos generales y específicos
- Metodología propuesta
- Referencias bibliográficas

[El contenido completo del documento se mostraría aquí en un sistema real]
  `;
  
  const existingComments = deliverable.comentariosDirector || [];
  
  modalBody.innerHTML = `
    <div class="deliverable-info-section">
      <h4>Información del Entregable</h4>
      <p><strong>Nombre:</strong> ${deliverable.name}</p>
      <p><strong>Archivo:</strong> ${deliverable.fileName}</p>
      <p><strong>Fase:</strong> ${deliverable.phase}</p>
      <p><strong>Fecha de carga:</strong> ${formatDate(deliverable.uploadDate)}</p>
      <p><strong>Estado actual:</strong> <span class="status ${getStatusClass(deliverable.status || 'Pendiente')}">${deliverable.status || 'Pendiente'}</span></p>
    </div>
    
    <div class="deliverable-info-section">
      <h4>Preview del Archivo</h4>
      <div class="deliverable-preview">${filePreview}</div>
      <button class="btn btn--sm btn--outline" onclick="showToast('Descarga simulada de ${deliverable.fileName}')">Descargar Archivo</button>
    </div>
    
    ${existingComments.length > 0 ? `
      <div class="deliverable-info-section">
        <h4>Comentarios Anteriores</h4>
        ${existingComments.map(c => `
          <div class="observation-item">
            <div class="observation-header">
              <span class="observation-author">${currentUser.name}</span>
              <span class="observation-date">${formatDate(c.fecha)}</span>
            </div>
            <div class="observation-text"><strong>Comentario:</strong> ${c.contenido}</div>
            ${c.sugerencias ? `<div class="observation-text" style="margin-top: 8px;"><strong>Sugerencias:</strong> ${c.sugerencias}</div>` : ''}
          </div>
        `).join('')}
      </div>
    ` : ''}
    
    <form id="reviewDeliverableForm">
      <div class="form-group">
        <label class="form-label">Comentarios / Observaciones *</label>
        <textarea id="reviewComments" class="form-control" rows="5" placeholder="Escriba sus comentarios sobre el entregable..." required></textarea>
      </div>
      
      <div class="form-group">
        <label class="form-label">Sugerencias de Mejora (Opcional)</label>
        <textarea id="reviewSuggestions" class="form-control" rows="3" placeholder="Sugerencias específicas para mejorar el trabajo..."></textarea>
      </div>
      
      <div class="action-buttons">
        <button type="button" class="btn btn--success" onclick="submitReview(${projectId}, ${deliverableId}, 'Aprobado')">✔ Aprobar</button>
        <button type="button" class="btn btn--warning" onclick="submitReview(${projectId}, ${deliverableId}, 'Pendiente')">🔄 Solicitar Ajustes</button>
        <button type="button" class="btn btn--danger" onclick="submitReview(${projectId}, ${deliverableId}, 'Rechazado')">✖ Rechazar</button>
        <button type="button" class="btn btn--outline" onclick="saveObservationOnly(${projectId}, ${deliverableId})">💾 Guardar Observaciones</button>
      </div>
    </form>
  `;
  
  openModal('reviewDeliverableModal');
}

function submitReview(projectId, deliverableId, newStatus) {
  const comments = document.getElementById('reviewComments').value;
  const suggestions = document.getElementById('reviewSuggestions').value;
  
  if (!comments.trim()) {
    showToast('Debe ingresar comentarios', 'error');
    return;
  }
  
  if (newStatus === 'Rechazado' && !comments.trim()) {
    showToast('Debe especificar el motivo del rechazo', 'error');
    return;
  }
  
  const project = projects.find(p => p.id === projectId);
  const deliverable = project?.deliverables.find(d => d.id === deliverableId);
  
  if (!project || !deliverable) return;
  
  // Inicializar comentarios si no existen
  if (!deliverable.comentariosDirector) {
    deliverable.comentariosDirector = [];
  }
  
  // Agregar comentario
  const newComment = {
    contenido: comments,
    fecha: new Date().toISOString(),
    sugerencias: suggestions,
    estado: newStatus
  };
  
  deliverable.comentariosDirector.push(newComment);
  deliverable.status = newStatus;
  
  // Actualizar estado del proyecto
  if (newStatus === 'Aprobado') {
    const allApproved = project.deliverables.every(d => d.status === 'Aprobado');
    if (allApproved) {
      project.status = 'Aprobado';
    }
  } else if (newStatus === 'Rechazado') {
    project.status = 'En Revisión';
  }
  
  // Registrar en historial
  revisionHistorial.push({
    id: revisionIdCounter++,
    projectId: projectId,
    projectTitle: project.title,
    deliverableId: deliverableId,
    deliverableName: deliverable.name,
    accion: newStatus,
    observacion: comments,
    fecha: new Date().toISOString(),
    director: currentUser.name
  });
  
  closeModal('reviewDeliverableModal');
  loadDirectorReview();
  
  const actionText = newStatus === 'Aprobado' ? 'aprobado' : (newStatus === 'Rechazado' ? 'rechazado' : 'marcado para ajustes');
  showToast(`Entregable ${actionText} exitosamente`);
}

function saveObservationOnly(projectId, deliverableId) {
  const comments = document.getElementById('reviewComments').value;
  const suggestions = document.getElementById('reviewSuggestions').value;
  
  if (!comments.trim()) {
    showToast('Debe ingresar comentarios', 'error');
    return;
  }
  
  const project = projects.find(p => p.id === projectId);
  const deliverable = project?.deliverables.find(d => d.id === deliverableId);
  
  if (!project || !deliverable) return;
  
  if (!deliverable.comentariosDirector) {
    deliverable.comentariosDirector = [];
  }
  
  deliverable.comentariosDirector.push({
    contenido: comments,
    fecha: new Date().toISOString(),
    sugerencias: suggestions,
    estado: 'Comentario guardado'
  });
  
  // Registrar en historial
  revisionHistorial.push({
    id: revisionIdCounter++,
    projectId: projectId,
    projectTitle: project.title,
    deliverableId: deliverableId,
    deliverableName: deliverable.name,
    accion: 'Comentario',
    observacion: comments,
    fecha: new Date().toISOString(),
    director: currentUser.name
  });
  
  closeModal('reviewDeliverableModal');
  showToast('Observaciones guardadas exitosamente');
}

function loadDirectorObservationsForm() {
  const directorProjects = projects.filter(p => p.director === currentUser.name);
  const container = document.getElementById('directorObservationsForm');
  
  if (directorProjects.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No tienes proyectos asignados</div></div>';
    return;
  }
  
  container.innerHTML = `
    <div class="card">
      <div class="card__body">
        <p style="color: var(--color-text-secondary); margin-bottom: 24px;">
          Emita observaciones generales sobre el proyecto completo. Estas observaciones serán visibles para el estudiante.
        </p>
        
        <form id="emitObservationForm">
          <div class="form-group">
            <label class="form-label">Seleccionar Proyecto *</label>
            <select id="obsProjectSelect" class="form-control" required>
              <option value="">Seleccione un proyecto</option>
              ${directorProjects.map(p => `<option value="${p.id}">${p.title} - ${p.student}</option>`).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Título de la Observación *</label>
            <input type="text" id="obsTitleInput" class="form-control" placeholder="Ej: Revisar metodología" required>
          </div>
          
          <div class="form-group">
            <label class="form-label">Contenido / Descripción Detallada *</label>
            <textarea id="obsContentInput" class="form-control" rows="5" placeholder="Describa la observación en detalle..." required></textarea>
          </div>
          
          <div class="form-group">
            <label class="form-label">Tipo de Observación *</label>
            <select id="obsTypeSelect" class="form-control" required>
              <option value="General">General</option>
              <option value="Marco Teórico">Marco Teórico</option>
              <option value="Objetivos">Objetivos</option>
              <option value="Metodología">Metodología</option>
              <option value="Resultados">Resultados</option>
              <option value="Conclusiones">Conclusiones</option>
              <option value="Documentación">Documentación</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label">Prioridad *</label>
            <select id="obsPrioritySelect" class="form-control" required>
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          
          <div style="display: flex; gap: 12px; margin-top: 24px;">
            <button type="submit" class="btn btn--primary">Enviar Observación</button>
            <button type="reset" class="btn btn--outline">Limpiar Formulario</button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  document.getElementById('emitObservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const projectId = parseInt(document.getElementById('obsProjectSelect').value);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    const newObservation = {
      id: project.observations.length + 1,
      titulo: document.getElementById('obsTitleInput').value,
      contenido: document.getElementById('obsContentInput').value,
      tipo: document.getElementById('obsTypeSelect').value,
      prioridad: document.getElementById('obsPrioritySelect').value,
      fecha: new Date().toISOString(),
      emisor: currentUser.name
    };
    
    project.observations.push(newObservation);
    
    // Registrar en historial
    revisionHistorial.push({
      id: revisionIdCounter++,
      projectId: projectId,
      projectTitle: project.title,
      deliverableId: null,
      deliverableName: 'Observación General',
      accion: 'Observación General',
      observacion: newObservation.titulo + ': ' + newObservation.contenido,
      fecha: new Date().toISOString(),
      director: currentUser.name
    });
    
    this.reset();
    showToast('Observación enviada exitosamente');
  });
}

function loadDirectorHistory() {
  const directorHistory = revisionHistorial.filter(r => r.director === currentUser.name);
  const container = document.getElementById('directorHistoryList');
  
  if (directorHistory.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-text">No hay revisiones registradas aún</div></div>';
    return;
  }
  
  const sortedHistory = directorHistory.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  
  container.innerHTML = `
    <div class="card">
      <div class="card__body" style="padding: 0;">
        <table class="history-table">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Proyecto</th>
              <th>Entregable</th>
              <th>Acción</th>
              <th>Observación</th>
            </tr>
          </thead>
          <tbody>
            ${sortedHistory.map(r => `
              <tr onclick="showHistoryDetail(${r.id})">
                <td>${formatDate(r.fecha)}</td>
                <td>${r.projectTitle}</td>
                <td>${r.deliverableName}</td>
                <td><span class="action-badge action-badge--${r.accion.toLowerCase().replace(' ', '')}">${r.accion}</span></td>
                <td>${r.observacion.substring(0, 50)}${r.observacion.length > 50 ? '...' : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showHistoryDetail(historyId) {
  const historyItem = revisionHistorial.find(r => r.id === historyId);
  if (!historyItem) return;
  
  const detailText = `
DETALLE DE REVISIÓN

Fecha: ${formatDate(historyItem.fecha)}
Proyecto: ${historyItem.projectTitle}
Entregable: ${historyItem.deliverableName}
Acción: ${historyItem.accion}

Observación completa:
${historyItem.observacion}
  `;
  
  alert(detailText);
}

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
  
  if (event && event.target) {
    event.target.classList.add('active');
  }
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
  const juryProjects = projects.filter(p => {
    const isJury = p.jury.includes(currentUser.name);
    const hasDeliverables = p.deliverables && p.deliverables.length > 0;
    const notEvaluated = !p.evaluations || !p.evaluations.find(ev => ev.evaluator === currentUser.name);
    return isJury && hasDeliverables && notEvaluated;
  });
  
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
            <div><strong>Fase:</strong> ${p.phase}</div>
            ${p.defenseDate ? `<div><strong>Sustentación:</strong> ${formatDate(p.defenseDate)}</div>` : ''}
            <div><strong>Entregables:</strong> ${p.deliverables.length} documentos</div>
            ${p.evaluations && p.evaluations.length > 0 ? `<div style="color: var(--color-info);"><strong>Evaluaciones:</strong> ${p.evaluations.length}/${p.jury.length} completadas</div>` : ''}
          </div>
          <div class="project-actions">
            <button class="btn btn--sm btn--outline" onclick="viewProjectDeliverablesForJury(${p.id})">Ver Entregables</button>
            <button class="btn btn--sm btn--primary" onclick="openEvaluationModal(${p.id})">Calificar Proyecto</button>
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
      fortalezas: document.getElementById('evaluationStrengths').value,
      mejoras: document.getElementById('evaluationImprovements').value,
      recomendaciones: document.getElementById('evaluationRecommendations').value,
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

function viewProjectDeliverablesForJury(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  
  let deliverablesInfo = `PROYECTO: ${project.title}\n\nENTREGABLES:\n\n`;
  
  if (project.deliverables.length === 0) {
    deliverablesInfo += 'No hay entregables cargados a\u00fan.\n';
  } else {
    project.deliverables.forEach((d, index) => {
      deliverablesInfo += `${index + 1}. ${d.name}\n`;
      deliverablesInfo += `   Fase: ${d.phase}\n`;
      deliverablesInfo += `   Archivo: ${d.fileName}\n`;
      deliverablesInfo += `   Fecha de carga: ${formatDate(d.uploadDate)}\n`;
      deliverablesInfo += `   Estado: ${d.status || 'Pendiente'}\n`;
      
      if (d.comentariosDirector && d.comentariosDirector.length > 0) {
        deliverablesInfo += `   Comentarios del director: ${d.comentariosDirector[d.comentariosDirector.length - 1].contenido}\n`;
      }
      
      deliverablesInfo += '\n';
    });
  }
  
  alert(deliverablesInfo);
}

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
