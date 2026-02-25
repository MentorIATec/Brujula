const CONFIG = {
  SHEET_ID: '10R-OSdlqOWTnyQQryHRy8m1w79BWyPyMrhBtR3fwHiM',
  STUDENTS_SHEET_NAME: 'Students',
  RESPONSES_SHEET_NAME: 'Responses_Processed',
  WEB_APP_URL: 'https://script.google.com/macros/s/AKfycbzyUOhcMlvytl0G50ASjk3n-Oqufg1rbmt7UQtfAzIn-yWeqjuj5VaWhi8R9ga2L1Rv/exec',
  VERSION: 'v1.0-unificada',
  ENABLE_PRIORITY_BUTTONS: false,
  WHATSAPP_LINK: 'https://wa.me/5218128612913',
  CALENDLY_LINK: 'https://calendly.com/karenkrei/charla-1-a-1',
  OPEN_OFFICE_TEXT: 'Open Office todos los jueves, 9:30 a 16:00, en Centrales Sur 3er piso. Avísame por WhatsApp antes de pasar.',
  PRIVACY_POLICY_URL: 'https://tec.mx/es/aviso-de-privacidad-alumnos',
  EMAIL_HEADER_IMAGE_URL: 'https://cdn.jsdelivr.net/gh/MentorIATec/Brujula@main/assets/image.png'
};

const STAGE_LABELS = {
  exploracion: 'Exploracion',
  enfoque: 'Enfoque'
};
const MAX_SUBMISSIONS_PER_EMAIL = 1;
const STUDENT_TRACKING_HEADERS = ['Interacción CRM', 'reminder_count', 'invitation_sent_ts'];

const RESPONSE_HEADERS = [
  'submission_ts',
  'email',
  'name',
  'stage',
  'stage_label',
  'stage_context',
  'answers_json',
  'score_total',
  'profile_scenario',
  'top_topics_json',
  'interest_topic',
  'recommendation_summary',
  'version',
  'quiz_started_ts',
  'quiz_completed_ts',
  'completion_seconds',
  'priority_click_ts',
  'attempt_number',
  'student_matricula',
  'student_avg',
  'student_ss_hours',
  'student_english_level',
  'student_interaccion_crm'
];

const QUESTION_BANK = {
  exploracion: [
    {
      key: 'claridad_carrera',
      title: '🎓 ¿Qué tan claro tienes la carrera que quieres elegir y tu proceso para decidir?',
      options: [
        'Nada claro, necesito orientación.',
        'Tengo algunas ideas, pero sigo confundido/a.',
        'Estoy explorando opciones (cursos, talleres o asesoría).',
        'Tengo casi decidido mi camino.',
        'Estoy totalmente seguro/a de mi elección.'
      ]
    },
    {
      key: 'desempeno_academico',
      title: '📚 ¿Cómo evalúas tu desempeño académico y tu promedio actual?',
      options: [
        'Me siento insatisfecho/a con mi promedio.',
        'Mi promedio no refleja mi esfuerzo.',
        'Estoy en un promedio aceptable, pero quiero mejorar.',
        'Estoy satisfecho/a con mi desempeño.',
        'Mi promedio es excelente y constante.'
      ]
    },
    {
      key: 'plan_practicas',
      title: '💼 ¿Qué tanto sabes sobre cómo y dónde buscar tus primeras prácticas profesionales?',
      options: [
        'No sé nada aún sobre prácticas.',
        'He escuchado algo, pero no tengo claro el proceso.',
        'Estoy investigando opciones y requisitos.',
        'Ya identifiqué oportunidades concretas.',
        'Estoy por aplicar o ya apliqué a prácticas.'
      ]
    },
    {
      key: 'servicio_social',
      title: '🤝 ¿Qué tan claro tienes tu plan para completar tus 480h de servicio social?',
      options: [
        'No he pensado en el servicio social.',
        'Sé que es requisito, pero no tengo plan.',
        'Estoy revisando opciones o proyectos.',
        'Ya tengo una opción identificada.',
        'Estoy inscrito/a y avanzando en horas.'
      ]
    }
  ],
  enfoque: [
    {
      key: 'servicio_social',
      title: '🤝 Antes de cursar tu Semestre Tec, necesitas haber completado tus 480 horas de Servicio Social. ¿Cuál es tu estatus actual?',
      options: [
        'No tengo claro cuándo lo terminaré, ni sé cuántas horas me faltan.',
        'Tengo un plan, pero me preocupa no terminar antes de mi Semestre Tec.',
        'Tengo pensado terminarlo en el próximo periodo intensivo (verano o invierno).',
        'Estoy en mi último proyecto y tengo planeado terminarlo este semestre.',
        '¡Misión cumplida! Ya cumplí mis 480 horas o más.'
      ]
    },
    {
      key: 'decision_semestre_tec',
      title: '✈️ ¿Qué tan definida tienes tu elección para tu(s) Semestre(s) Tec (intercambio, prácticas, concentración)?',
      options: [
        'Tengo algunas ideas generales, pero realmente no sé por dónde empezar a decidir.',
        'Ya estoy investigando, pero aún no he definido una opción clara.',
        'Tengo solo 1 opción considerada; si no funciona, no sabría qué elegir.',
        'Tengo al menos 3 alternativas que me gustan y planeo reunirme con mi Director de Programa para validarlas.',
        'Ya tengo 5 opciones bien estudiadas, me siento informado/a y ya lo validé con mi Director/a de Programa.'
      ]
    },
    {
      key: 'certificacion_idioma',
      title: '🌍 Si consideras un intercambio, ¿cuál es tu estatus con el examen de certificación de idioma (inglés, francés, alemán, etc.)?',
      options: [
        'No estoy considerando un intercambio / No estoy seguro/a de qué examen o puntaje necesito para los destinos que me interesan.',
        'Sé lo que necesito, pero no he comenzado a prepararme formalmente.',
        'Estoy preparándome para un idioma distinto al inglés (ej. francés, alemán) que es requisito.',
        'Me siento listo/a para presentar el examen, pero aún no he agendado una fecha.',
        '¡Listo! Ya tengo mi certificado vigente con el puntaje necesario para mis opciones de intercambio.'
      ]
    },
    {
      key: 'plan_practicas',
      title: '💼 Si tuvieras que aplicar a tus prácticas profesionales soñadas hoy mismo, ¿qué tan preparado/a te sentirías?',
      options: [
        'No me sentiría preparado/a; no he comenzado a adaptar mi CV ni he explorado empresas.',
        'Tengo un CV básico, pero necesitaría mucho trabajo para adaptarlo y no he buscado activamente.',
        'Estoy en proceso de mejorar mi CV y tengo una lista de empresas que me interesan.',
        'Me siento seguro/a con mi CV y ya estoy aplicando a vacantes o preparándome para entrevistas.',
        'Totalmente preparado/a; ya estoy en procesos de entrevista, tengo una oferta o ya conseguí prácticas.'
      ]
    }
  ]
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Brujula Unificada')
    .addItem('1. Generar Enlaces Personalizados', 'generateCustomLinks')
    .addItem('2. Enviar Invitacion Inicial', 'sendInitialInvitationEmails')
    .addItem('3. Enviar Recordatorios (Pendientes)', 'sendAutomaticReminders')
    .addItem('4. Enviar Correo de Prueba', 'sendSingleTestEmail')
    .addSeparator()
    .addItem('5. Ver Resumen Observabilidad V1', 'showObservabilitySummary')
    .addItem('6. Ver Resumen de Envíos', 'showDeliverySummary')
    .addItem('7. Poblar Campos Base (Students)', 'populateStudentsBaseFields')
    .addToUi();
}

function doGet(e) {
  const params = e.parameter || {};

  if (params.action === 'register') {
    return registerInterest_(params);
  }

  const email = (params.email || '').trim();
  const name = (params.name || '').trim();

  if (!email || !name) {
    return HtmlService.createHtmlOutput('<h1>Error de acceso</h1><p>Usa tu enlace personalizado.</p>');
  }

  const responseStats = getResponseStatsByEmail_(email);
  const studentProfile = getStudentProfileByEmail_(email);
  const template = HtmlService.createTemplateFromFile('index');
  const whatsappPrefill = buildWhatsappLink_(
    CONFIG.WHATSAPP_LINK,
    'Hola, Karen, ya contesté el test y sí me gustaría platicar de mis resultados contigo'
  );
  template.email = email;
  template.name = name;
  template.questionBankJson = JSON.stringify(QUESTION_BANK);
  template.previousResponseJson = JSON.stringify(responseStats.last || null);
  template.studentProfileJson = JSON.stringify(studentProfile || {});
  template.responseStatsJson = JSON.stringify({
    count: responseStats.count,
    maxAllowed: MAX_SUBMISSIONS_PER_EMAIL
  });
  template.whatsappLinkJson = JSON.stringify(CONFIG.WHATSAPP_LINK);
  template.whatsappResultLinkJson = JSON.stringify(whatsappPrefill);
  template.privacyPolicyUrlJson = JSON.stringify(CONFIG.PRIVACY_POLICY_URL);
  template.calendlyLinkJson = JSON.stringify(CONFIG.CALENDLY_LINK);

  return template
    .evaluate()
    .setTitle('Brujula Unificada')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

function processWebAppSubmission(payload) {
  try {
    if (!payload || !payload.student || !payload.stage || !payload.answers) {
      throw new Error('Payload incompleto.');
    }

    const student = payload.student;
    const stage = normalizeStage_(payload.stage);
    const stageContext = payload.stageContext || '';
    const answers = payload.answers;
    const clientMetrics = payload.clientMetrics || {};
    const cleanEmail = String(student.email || '').trim();
    const responseStats = getResponseStatsByEmail_(cleanEmail);
    const studentProfile = getStudentProfileByEmail_(cleanEmail);

    if (responseStats.count >= MAX_SUBMISSIONS_PER_EMAIL) {
      throw new Error('Ya registraste tu respuesta para esta Brújula. Si necesitas un ajuste, escríbele a tu mentora.');
    }

    const scoring = computeScores_(stage, answers);
    const topTwo = getTopOpportunities_(scoring.dimensionScores, 2);

    const record = {
      submission_ts: new Date(),
      email: cleanEmail,
      name: String(student.name || '').trim(),
      stage: stage,
      stage_label: STAGE_LABELS[stage],
      stage_context: stageContext,
      answers_json: JSON.stringify(answers),
      score_total: scoring.total,
      profile_scenario: scoring.scenario,
      top_topics_json: JSON.stringify(topTwo),
      interest_topic: '',
      recommendation_summary: buildRecommendationSummary_(stage, scoring.scenario, topTwo),
      version: CONFIG.VERSION,
      quiz_started_ts: parseDateSafe_(clientMetrics.quizStartedAt),
      quiz_completed_ts: parseDateSafe_(clientMetrics.quizCompletedAt) || new Date(),
      completion_seconds: Number(clientMetrics.completionSeconds || ''),
      priority_click_ts: '',
      attempt_number: responseStats.count + 1,
      student_matricula: studentProfile.matricula || '',
      student_avg: studentProfile.promedio_acumulado || '',
      student_ss_hours: studentProfile.horas_servicio_social || '',
      student_english_level: studentProfile.nivel_ingles || '',
      student_interaccion_crm: studentProfile.interaccion_crm || ''
    };

    writeToResponsesSheet_(record);
    sendStudentEmail_(record, topTwo);

    return {
      status: 'success',
      scoreTotal: scoring.total,
      scenario: scoring.scenario,
      topTopics: topTwo
    };
  } catch (error) {
    Logger.log('Error processWebAppSubmission: ' + error.toString());
    throw new Error('No se pudieron procesar los datos: ' + error.message);
  }
}

function normalizeStage_(stage) {
  const clean = String(stage || '').toLowerCase().trim();
  if (!QUESTION_BANK[clean]) {
    throw new Error('Etapa invalida.');
  }
  return clean;
}

function parseDateSafe_(value) {
  if (!value) return '';
  const date = new Date(value);
  if (isNaN(date.getTime())) return '';
  return date;
}

function computeScores_(stage, answers) {
  const questions = QUESTION_BANK[stage] || [];
  if (!questions.length) {
    throw new Error('No hay preguntas para esta etapa.');
  }

  const dimensionScores = questions.map(function(question) {
    const value = Number(answers[question.key] || 0);
    return {
      key: question.key,
      label: getTopicName_(stage, question.key),
      value: value
    };
  });

  const validScores = dimensionScores
    .map(function(item) { return item.value; })
    .filter(function(v) { return v >= 1 && v <= 5; });

  if (validScores.length !== questions.length) {
    throw new Error('Faltan respuestas o hay respuestas invalidas.');
  }

  const avg = validScores.reduce(function(acc, val) { return acc + val; }, 0) / validScores.length;
  const total = Math.round((avg / 5) * 100);

  let scenario = 'Desarrollo';
  const highScores = validScores.filter(function(v) { return v >= 4; }).length;
  const lowScores = validScores.filter(function(v) { return v <= 2; }).length;

  if (highScores === validScores.length) {
    scenario = 'Consolidado';
  } else if (lowScores >= 2) {
    scenario = 'Oportunidad';
  }

  return {
    total: total,
    scenario: scenario,
    dimensionScores: dimensionScores
  };
}

function getTopOpportunities_(dimensionScores, limit) {
  return dimensionScores
    .slice()
    .sort(function(a, b) { return a.value - b.value; })
    .slice(0, limit)
    .map(function(item) {
      return {
        key: item.key,
        label: item.label,
        score: item.value
      };
    });
}

function getTopicName_(stage, key) {
  const names = {
    exploracion: {
      claridad_carrera: 'Claridad de carrera de egreso',
      desempeno_academico: 'Desempeño académico',
      plan_practicas: 'Planeación de prácticas',
      servicio_social: 'Servicio social'
    },
    enfoque: {
      servicio_social: 'Servicio social',
      decision_semestre_tec: 'Decisión de Semestre Tec',
      certificacion_idioma: 'Certificación de idioma',
      plan_practicas: 'Preparación para prácticas'
    }
  };

  return (names[stage] && names[stage][key]) || key;
}

function buildRecommendationSummary_(stage, scenario, topTwo) {
  const stageText = stage === 'exploracion'
    ? 'Estás en etapa de Exploración (avenida o transición previa a carrera de egreso).'
    : 'Estás en etapa de Enfoque (con carrera de egreso definida o en consolidación).';

  const focus = topTwo.map(function(t) { return t.label; }).join(' y ');

  if (scenario === 'Consolidado') {
    return stageText + ' Muestras autonomía alta. Siguiente paso: reunión estratégica con tu mentora para acelerar oportunidades concretas.';
  }
  if (scenario === 'Oportunidad') {
    return stageText + ' Hay oportunidad prioritaria en ' + focus + '. Siguiente paso: reunión prioritaria con tu mentora para un plan de acción claro.';
  }
  return stageText + ' Tu avance es bueno y mejorable. Enfoquemos ' + focus + ' en una reunión de retroalimentación y seguimiento.';
}

function writeToResponsesSheet_(record) {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.RESPONSES_SHEET_NAME);
  if (!sheet) {
    throw new Error('No existe la hoja ' + CONFIG.RESPONSES_SHEET_NAME);
  }

  ensureResponseHeaders_(sheet);
  const row = RESPONSE_HEADERS.map(function(header) {
    return record[header] !== undefined ? record[header] : '';
  });

  sheet.appendRow(row);
}

function ensureResponseHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(RESPONSE_HEADERS);
    return;
  }

  const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const missingHeaders = RESPONSE_HEADERS.filter(function(header) {
    return currentHeaders.indexOf(header) === -1;
  });

  if (!missingHeaders.length) return;

  const startCol = sheet.getLastColumn() + 1;
  sheet.getRange(1, startCol, 1, missingHeaders.length).setValues([missingHeaders]);
}

function findPreviousResponse_(email) {
  const stats = getResponseStatsByEmail_(email);
  return stats.last;
}

function getResponseStatsByEmail_(email) {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.RESPONSES_SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) {
    return {count: 0, last: null};
  }

  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const emailIdx = headers.indexOf('email');
  if (emailIdx < 0) {
    return {count: 0, last: null};
  }

  let count = 0;
  let last = null;
  for (var i = data.length - 1; i > 0; i--) {
    if (String(data[i][emailIdx]).trim().toLowerCase() === String(email).trim().toLowerCase()) {
      count += 1;
      if (!last) {
        const obj = {};
        headers.forEach(function(header, index) {
          obj[header] = data[i][index];
        });
        last = obj;
      }
    }
  }

  return {count: count, last: last};
}

function sendStudentEmail_(record, topTwo) {
  const firstName = record.name.split(' ')[0];
  const topic1 = topTwo[0] ? topTwo[0].label : 'tu avance académico';
  const topic2 = topTwo[1] ? topTwo[1].label : 'tu siguiente decisión';
  const topic1Action = getTopicActionText_(topic1);
  const topic2Action = getTopicActionText_(topic2);
  const whatsappLink = CONFIG.WHATSAPP_LINK;
  const whatsappResultLink = buildWhatsappLink_(
    CONFIG.WHATSAPP_LINK,
    'Hola, Karen, ya contesté el test y sí me gustaría platicar de mis resultados contigo'
  );
  const stageLabel = record.stage_label || record.stage || 'Sin etapa';
  const scenarioLabel = getScenarioLabel_(record.profile_scenario);
  const legacyPrioritySection = CONFIG.ENABLE_PRIORITY_BUTTONS
    ? buildLegacyPrioritySection_(record, firstName, topic1, topic2)
    : '';
  const htmlBody = renderEmailTemplate_('EmailResult', {
    firstName: firstName,
    scoreTotal: record.score_total,
    scenarioLabel: scenarioLabel,
    stageLabel: stageLabel,
    topic1Action: topic1Action,
    topic2Action: topic2Action,
    legacyPrioritySection: legacyPrioritySection,
    whatsappLink: whatsappResultLink,
    whatsappDirectLink: whatsappLink,
    calendlyLink: CONFIG.CALENDLY_LINK,
    openOfficeText: CONFIG.OPEN_OFFICE_TEXT
  });

  MailApp.sendEmail({
    to: record.email,
    subject: firstName + ', tu Brújula está lista',
    htmlBody: htmlBody
  });
}

function getTopicActionText_(topicLabel) {
  const topic = String(topicLabel || '').trim().toLowerCase();
  const map = {
    'desempeño académico': 'fortalecer tu desempeño académico',
    'servicio social': 'avanzar en tu servicio social',
    'claridad de carrera de egreso': 'clarificar tu decisión de carrera de egreso',
    'planeación de prácticas': 'definir tu plan para prácticas',
    'decisión de semestre tec': 'concretar tu decisión de Semestre Tec',
    'certificación de idioma': 'planear tu certificación de idioma',
    'preparación para prácticas': 'fortalecer tu preparación para prácticas'
  };
  return map[topic] || ('avanzar en ' + String(topicLabel || 'tu siguiente paso').toLowerCase());
}

function getScenarioLabel_(scenario) {
  const labels = {
    Consolidado: 'Nivel avanzado',
    Desarrollo: 'En buen avance',
    Oportunidad: 'Con potencial claro'
  };
  return labels[scenario] || scenario || 'Sin perfil';
}

function buildLegacyPrioritySection_(record, firstName, topic1, topic2) {
  const webAppUrl = ScriptApp.getService().getUrl();
  const link1 = webAppUrl + '?action=register&email=' + encodeURIComponent(record.email) + '&name=' + encodeURIComponent(firstName) + '&topic=' + encodeURIComponent(topic1);
  const link2 = webAppUrl + '?action=register&email=' + encodeURIComponent(record.email) + '&name=' + encodeURIComponent(firstName) + '&topic=' + encodeURIComponent(topic2);

  return (
    '<p style="margin:0 0 8px 0;">Para preparar la reunión, también puedes marcar una prioridad:</p>' +
    '<p><a style="display:inline-block;margin:4px;padding:10px 14px;background:#334155;color:#fff;text-decoration:none;border-radius:6px" href="' + link1 + '">Priorizar: ' + sanitizeHtml_(topic1) + '</a></p>' +
    '<p><a style="display:inline-block;margin:4px;padding:10px 14px;background:#64748b;color:#fff;text-decoration:none;border-radius:6px" href="' + link2 + '">Priorizar: ' + sanitizeHtml_(topic2) + '</a></p>'
  );
}

function buildProfileSnapshotHtml_(student) {
  const items = [];
  if (student.matricula) items.push('<li><strong>Matrícula:</strong> ' + sanitizeHtml_(student.matricula) + '</li>');
  if (student.promedio_acumulado) items.push('<li><strong>Promedio acumulado:</strong> ' + sanitizeHtml_(student.promedio_acumulado) + '</li>');
  if (student.horas_servicio_social) items.push('<li><strong>Horas de servicio social:</strong> ' + sanitizeHtml_(student.horas_servicio_social) + '</li>');
  if (student.nivel_ingles) items.push('<li><strong>Nivel de inglés:</strong> ' + sanitizeHtml_(student.nivel_ingles) + '</li>');
  if (!items.length) return '';
  return (
    '<div style="background:#f7faff;border:1px solid #d8e6fb;border-radius:10px;padding:12px 14px;margin:14px 0;">' +
      '<p style="margin:0 0 8px 0;font-weight:700;color:#274472;">Información que tengo de ti al momento</p>' +
      '<ul style="margin:0;padding-left:18px;color:#334155;line-height:1.4;">' + items.join('') + '</ul>' +
    '</div>'
  );
}

function sanitizeHtml_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderEmailTemplate_(templateName, data) {
  const template = HtmlService.createTemplateFromFile(templateName);
  Object.keys(data || {}).forEach(function(key) {
    template[key] = data[key];
  });
  return template.evaluate().getContent();
}

function buildWhatsappLink_(baseLink, messageText) {
  const base = String(baseLink || '').trim();
  if (!base) return '';
  const text = String(messageText || '').trim();
  if (!text) return base;
  const separator = base.indexOf('?') >= 0 ? '&' : '?';
  return base + separator + 'text=' + encodeURIComponent(text);
}

function registerInterest_(params) {
  const email = String(params.email || '').trim();
  const topic = String(params.topic || '').trim();
  const name = String(params.name || 'estudiante').trim();

  if (!email || !topic) {
    return HtmlService.createHtmlOutput('<h1>Error</h1><p>No se pudo registrar tu interes.</p>');
  }

  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.RESPONSES_SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) {
    return HtmlService.createHtmlOutput('<h1>Error</h1><p>No hay respuestas registradas.</p>');
  }

  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const emailIdx = headers.indexOf('email');
  const interestIdx = headers.indexOf('interest_topic');
  const priorityClickIdx = headers.indexOf('priority_click_ts');

  for (var i = data.length - 1; i > 0; i--) {
    if (String(data[i][emailIdx]).trim().toLowerCase() === email.toLowerCase()) {
      sheet.getRange(i + 1, interestIdx + 1).setValue(topic);
      if (priorityClickIdx > -1) {
        sheet.getRange(i + 1, priorityClickIdx + 1).setValue(new Date());
      }
      break;
    }
  }

  const msg =
    '<body style="font-family:Arial,sans-serif;text-align:center;padding-top:48px">' +
      '<h1>Gracias, ' + sanitizeHtml_(name) + '</h1>' +
      '<p>Ya registre tu prioridad: <strong>' + sanitizeHtml_(topic) + '</strong>.</p>' +
      '<p>Nos vemos en la sesion de mentoria.</p>' +
    '</body>';

  return HtmlService.createHtmlOutput(msg);
}

function generateCustomLinks() {
  const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  const sheet = ss.getSheetByName(CONFIG.STUDENTS_SHEET_NAME);

  if (!sheet) {
    SpreadsheetApp.getUi().alert('No existe la hoja ' + CONFIG.STUDENTS_SHEET_NAME);
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    SpreadsheetApp.getUi().alert('No hay estudiantes para generar enlaces.');
    return;
  }

  if (!CONFIG.WEB_APP_URL || CONFIG.WEB_APP_URL.indexOf('REPLACE_') === 0) {
    SpreadsheetApp.getUi().alert('Configura WEB_APP_URL en CONFIG.');
    return;
  }

  const formulas = [];
  for (var row = 2; row <= lastRow; row++) {
    formulas.push([
      '=HYPERLINK("' + CONFIG.WEB_APP_URL + '?email=" & ENCODEURL(A' + row + ') & "&name=" & ENCODEURL(B' + row + '), "Enlace para " & B' + row + ')'
    ]);
  }

  sheet.getRange(2, 3, formulas.length, 1).setFormulas(formulas);
  SpreadsheetApp.getUi().alert('Enlaces generados en la columna C.');
}

function sendInitialInvitationEmails() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    'Confirmacion',
    'Se enviará invitación inicial a todos los estudiantes de la lista. ¿Deseas continuar?',
    ui.ButtonSet.YES_NO
  );

  if (confirmation !== ui.Button.YES) {
    ui.alert('Envio cancelado.');
    return;
  }

  const students = getStudents_();
  const pendingInvitation = students.filter(function(student) {
    return !student.invitation_sent_ts;
  });

  if (!pendingInvitation.length) {
    ui.alert('No hay estudiantes nuevos pendientes de invitación inicial.');
    return;
  }

  pendingInvitation.forEach(function(student) {
    const email = student.email;
    const firstName = student.name.split(' ')[0];
    const link = CONFIG.WEB_APP_URL + '?email=' + encodeURIComponent(student.email) + '&name=' + encodeURIComponent(student.name);
    const profileBlock = buildProfileSnapshotHtml_(student);
    const htmlBody = renderEmailTemplate_('EmailInvitation', {
      firstName: firstName,
      profileBlock: profileBlock,
      testLink: link,
      whatsappLink: CONFIG.WHATSAPP_LINK,
      openOfficeText: CONFIG.OPEN_OFFICE_TEXT,
      headerImageUrl: CONFIG.EMAIL_HEADER_IMAGE_URL
    });

    MailApp.sendEmail({
      to: email,
      subject: firstName + ', revisemos tu avance de este semestre',
      htmlBody: htmlBody
    });
    logInvitationSent_(student.rowNumber);

    Utilities.sleep(500);
  });

  ui.alert(
    'Invitaciones enviadas: ' + pendingInvitation.length +
    '\nYa contaban con invitación previa: ' + (students.length - pendingInvitation.length)
  );
}

function sendSingleTestEmail(email) {
  const ui = SpreadsheetApp.getUi();
  let targetEmail = String(email || '').trim().toLowerCase();

  if (!targetEmail) {
    const response = ui.prompt(
      'Enviar correo de prueba',
      'Escribe el correo destino para la prueba:',
      ui.ButtonSet.OK_CANCEL
    );
    if (response.getSelectedButton() !== ui.Button.OK) {
      ui.alert('Envío cancelado.');
      return;
    }
    targetEmail = String(response.getResponseText() || '').trim().toLowerCase();
  }

  if (!targetEmail) {
    ui.alert('Debes indicar un correo válido.');
    return;
  }

  const students = getStudents_();
  let student = students.find(function(s) {
    return String(s.email || '').trim().toLowerCase() === targetEmail;
  });

  // Fallback para pruebas rápidas cuando el correo no está en Students.
  if (!student) {
    const firstName = targetEmail.split('@')[0] || 'estudiante';
    student = {
      email: targetEmail,
      name: firstName,
      matricula: '',
      promedio_acumulado: '',
      horas_servicio_social: '',
      nivel_ingles: ''
    };
  }

  const firstName = String(student.name || '').trim().split(' ')[0] || 'estudiante';
  const link = CONFIG.WEB_APP_URL + '?email=' + encodeURIComponent(student.email) + '&name=' + encodeURIComponent(student.name || firstName);
  const profileBlock = buildProfileSnapshotHtml_(student);
  const htmlBody = renderEmailTemplate_('EmailInvitation', {
    firstName: firstName,
    profileBlock: profileBlock,
    testLink: link,
    whatsappLink: CONFIG.WHATSAPP_LINK,
    openOfficeText: CONFIG.OPEN_OFFICE_TEXT,
    headerImageUrl: CONFIG.EMAIL_HEADER_IMAGE_URL
  });

  MailApp.sendEmail({
    to: targetEmail,
    subject: '[PRUEBA] ' + firstName + ', revisemos tu avance de este semestre',
    htmlBody: htmlBody
  });

  ui.alert('Correo de prueba enviado a: ' + targetEmail);
}

function logInvitationSent_(rowNumber) {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.STUDENTS_SHEET_NAME);
  if (!sheet || !rowNumber) return;
  ensureStudentTrackingHeaders_(sheet);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const idx = buildHeaderIndex_(headers);
  const sentTsCol = idx['invitation_sent_ts'];
  if (sentTsCol) sheet.getRange(rowNumber, sentTsCol).setValue(new Date());
}

function sendAutomaticReminders() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    'Confirmacion',
    'Se enviarán recordatorios a estudiantes pendientes. ¿Deseas continuar?',
    ui.ButtonSet.YES_NO
  );

  if (confirmation !== ui.Button.YES) {
    ui.alert('Envio cancelado.');
    return;
  }

  const students = getStudents_();
  const responded = getRespondedEmails_();

  const pending = students.filter(function(student) {
    return !responded.has(student.email.toLowerCase());
  });

  pending.forEach(function(student) {
    const firstName = student.name.split(' ')[0];
    const link = CONFIG.WEB_APP_URL + '?email=' + encodeURIComponent(student.email) + '&name=' + encodeURIComponent(student.name);
    const reminderNumber = incrementReminderCount_(student.rowNumber);
    const profileBlock = buildProfileSnapshotHtml_(student);
    const htmlBody = renderEmailTemplate_('EmailReminder', {
      firstName: firstName,
      profileBlock: profileBlock,
      testLink: link,
      whatsappLink: CONFIG.WHATSAPP_LINK,
      reminderNumber: reminderNumber,
      openOfficeText: CONFIG.OPEN_OFFICE_TEXT,
      headerImageUrl: CONFIG.EMAIL_HEADER_IMAGE_URL
    });

    MailApp.sendEmail({
      to: student.email,
      subject: 'Recordatorio #' + reminderNumber + ': ' + firstName + ', aún estás a tiempo de completar tu test',
      htmlBody: htmlBody
    });

    Utilities.sleep(500);
  });

  ui.alert('Recordatorios enviados: ' + pending.length);
}

function getStudents_() {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.STUDENTS_SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) return [];
  ensureStudentTrackingHeaders_(sheet);
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const index = buildHeaderIndex_(headers);
  const students = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    const email = getCellByHeader_(row, index, ['email']);
    const name = getCellByHeader_(row, index, ['name']);
    if (!email || !name) continue;
    students.push({
      rowNumber: i + 1,
      email: String(email).trim(),
      name: String(name).trim(),
      interaccion_crm: String(getCellByHeader_(row, index, ['interaccion crm']) || '').trim(),
      reminder_count: Number(getCellByHeader_(row, index, ['reminder_count']) || 0),
      invitation_sent_ts: getCellByHeader_(row, index, ['invitation_sent_ts']),
      matricula: String(getCellByHeader_(row, index, ['matricula', 'matrícula']) || '').trim(),
      semestre: String(getCellByHeader_(row, index, ['semestre', 'semester']) || '').trim(),
      promedio_acumulado: String(getCellByHeader_(row, index, ['promedio acumulado', 'promedio']) || '').trim(),
      horas_servicio_social: String(getCellByHeader_(row, index, ['horas de servicio social', 'horas servicio social']) || '').trim(),
      nivel_ingles: String(getCellByHeader_(row, index, ['nivel de ingles', 'nivel de inglés', 'requisito de ingles', 'requisito de inglés']) || '').trim(),
      requisito_ingles: String(getCellByHeader_(row, index, ['requisito de ingles', 'requisito de inglés']) || '').trim()
    });
  }
  return students;
}

function getStudentProfileByEmail_(email) {
  const target = String(email || '').trim().toLowerCase();
  if (!target) return {};
  const students = getStudents_();
  for (var i = 0; i < students.length; i++) {
    if (students[i].email.toLowerCase() === target) return students[i];
  }
  return {};
}

function incrementReminderCount_(rowNumber) {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.STUDENTS_SHEET_NAME);
  if (!sheet || !rowNumber) return 0;
  ensureStudentTrackingHeaders_(sheet);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const idx = buildHeaderIndex_(headers);
  const reminderCol = idx['reminder_count'];
  if (!reminderCol) return 0;
  const current = Number(sheet.getRange(rowNumber, reminderCol).getValue() || 0);
  const next = current + 1;
  sheet.getRange(rowNumber, reminderCol).setValue(next);
  return next;
}

function ensureStudentTrackingHeaders_(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const normalized = headers.map(normalizeHeader_);
  const missing = [];
  STUDENT_TRACKING_HEADERS.forEach(function(header) {
    if (normalized.indexOf(normalizeHeader_(header)) === -1) {
      missing.push(header);
    }
  });
  if (!missing.length) return;
  const startCol = sheet.getLastColumn() + 1;
  sheet.getRange(1, startCol, 1, missing.length).setValues([missing]);
}

function buildHeaderIndex_(headers) {
  const idx = {};
  headers.forEach(function(header, i) {
    idx[normalizeHeader_(header)] = i + 1;
  });
  return idx;
}

function getCellByHeader_(row, index, aliases) {
  for (var i = 0; i < aliases.length; i++) {
    const col = index[normalizeHeader_(aliases[i])];
    if (col) return row[col - 1];
  }
  return '';
}

function normalizeHeader_(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function populateStudentsBaseFields() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.STUDENTS_SHEET_NAME);

  if (!sheet) {
    ui.alert('No existe la hoja ' + CONFIG.STUDENTS_SHEET_NAME);
    return;
  }

  const requiredHeaders = [
    'semestre',
    'horas de servicio social',
    'promedio acumulado',
    'requisito de inglés'
  ];

  ensureHeaders_(sheet, requiredHeaders);

  if (sheet.getLastRow() < 2) {
    ui.alert('Se agregaron/verificaron encabezados, pero no hay estudiantes para poblar.');
    return;
  }

  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const index = buildHeaderIndex_(headers);

  const emailCol = index['email'] || 0;
  const nameCol = index['name'] || 0;
  const semestreCol = index[normalizeHeader_('semestre')] || 0;
  const ssHoursCol = index[normalizeHeader_('horas de servicio social')] || 0;
  const avgCol = index[normalizeHeader_('promedio acumulado')] || 0;
  const englishReqCol = index[normalizeHeader_('requisito de inglés')] || 0;

  if (!semestreCol || !ssHoursCol || !avgCol || !englishReqCol) {
    ui.alert('No fue posible localizar todas las columnas base.');
    return;
  }

  let updatedRows = 0;
  for (var row = 2; row <= values.length; row++) {
    const rowValues = values[row - 1];
    const hasStudent = (emailCol && rowValues[emailCol - 1]) || (nameCol && rowValues[nameCol - 1]);
    if (!hasStudent) continue;

    let touched = false;
    if (!rowValues[semestreCol - 1]) {
      sheet.getRange(row, semestreCol).setValue('Pendiente');
      touched = true;
    }
    if (!rowValues[ssHoursCol - 1]) {
      sheet.getRange(row, ssHoursCol).setValue('0');
      touched = true;
    }
    if (!rowValues[avgCol - 1]) {
      sheet.getRange(row, avgCol).setValue('Pendiente');
      touched = true;
    }
    if (!rowValues[englishReqCol - 1]) {
      sheet.getRange(row, englishReqCol).setValue('Pendiente');
      touched = true;
    }

    if (touched) updatedRows += 1;
  }

  ui.alert(
    'Poblado base completado',
    'Filas actualizadas: ' + updatedRows + '\nSe verificaron columnas: ' + requiredHeaders.join(', '),
    ui.ButtonSet.OK
  );
}

function ensureHeaders_(sheet, requiredHeaders) {
  const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const normalized = currentHeaders.map(normalizeHeader_);
  const missing = requiredHeaders.filter(function(header) {
    return normalized.indexOf(normalizeHeader_(header)) === -1;
  });

  if (!missing.length) return;
  const startCol = sheet.getLastColumn() + 1;
  sheet.getRange(1, startCol, 1, missing.length).setValues([missing]);
}

function getRespondedEmails_() {
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.RESPONSES_SHEET_NAME);
  if (!sheet || sheet.getLastRow() < 2) {
    return new Set();
  }

  const data = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
  const set = new Set();

  data.forEach(function(row) {
    if (row[0]) {
      set.add(String(row[0]).trim().toLowerCase());
    }
  });

  return set;
}

function showObservabilitySummary() {
  const ui = SpreadsheetApp.getUi();
  const summary = buildObservabilitySummary_();
  ui.alert('Resumen Observabilidad V1', summary, ui.ButtonSet.OK);
}

function showDeliverySummary() {
  const ui = SpreadsheetApp.getUi();
  const summary = buildDeliverySummary_();
  ui.alert('Resumen de Envíos', summary, ui.ButtonSet.OK);
}

function buildDeliverySummary_() {
  const students = getStudents_();
  const total = students.length;
  if (!total) return 'No hay estudiantes en la hoja Students.';

  let invited = 0;
  let notInvited = 0;
  let remindersSent = 0;
  let studentsWithReminders = 0;
  let maxReminderCount = 0;
  let crmNoTotal = 0;
  let crmNoInvited = 0;
  let crmNoNotInvited = 0;

  students.forEach(function(student) {
    const sent = !!student.invitation_sent_ts;
    const reminderCount = Number(student.reminder_count || 0);
    const crmNo = normalizeHeader_(student.interaccion_crm) === 'no';

    if (sent) invited += 1;
    else notInvited += 1;

    if (crmNo) {
      crmNoTotal += 1;
      if (sent) crmNoInvited += 1;
      else crmNoNotInvited += 1;
    }

    if (reminderCount > 0) studentsWithReminders += 1;
    remindersSent += reminderCount;
    if (reminderCount > maxReminderCount) maxReminderCount = reminderCount;
  });

  const invitedRate = Math.round((invited / total) * 100);
  const crmNoInvitedRate = crmNoTotal > 0 ? Math.round((crmNoInvited / crmNoTotal) * 100) : 0;

  return [
    'Total estudiantes: ' + total,
    'Invitación inicial enviada: ' + invited,
    'Pendientes de invitación inicial: ' + notInvited,
    'Cobertura de invitación: ' + invitedRate + '%',
    '',
    'Recordatorios:',
    '- Total recordatorios enviados: ' + remindersSent,
    '- Estudiantes con al menos 1 recordatorio: ' + studentsWithReminders,
    '- Máximo recordatorios a un estudiante: ' + maxReminderCount,
    '',
    'Segmento Interacción CRM = No:',
    '- Total: ' + crmNoTotal,
    '- Con invitación inicial: ' + crmNoInvited,
    '- Sin invitación inicial: ' + crmNoNotInvited,
    '- Cobertura del segmento: ' + crmNoInvitedRate + '%'
  ].join('\n');
}

function buildObservabilitySummary_() {
  const students = getStudents_();
  const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  const responsesSheet = ss.getSheetByName(CONFIG.RESPONSES_SHEET_NAME);
  const totalStudents = students.length;
  if (!responsesSheet || responsesSheet.getLastRow() < 2) {
    return 'No hay respuestas todavía.\n\nTotal estudiantes: ' + totalStudents;
  }

  const data = responsesSheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);

  const idxEmail = headers.indexOf('email');
  const idxScenario = headers.indexOf('profile_scenario');
  const idxSeconds = headers.indexOf('completion_seconds');
  const idxInterest = headers.indexOf('interest_topic');
  const idxPriorityTs = headers.indexOf('priority_click_ts');

  const uniqueResponded = new Set();
  const scenarioCounts = {Consolidado: 0, Desarrollo: 0, Oportunidad: 0};
  let secondsTotal = 0;
  let secondsCount = 0;
  let interestSelected = 0;
  let priorityClicks = 0;

  rows.forEach(function(row) {
    const email = String(row[idxEmail] || '').trim().toLowerCase();
    if (email) uniqueResponded.add(email);

    const scenario = row[idxScenario];
    if (scenarioCounts[scenario] !== undefined) {
      scenarioCounts[scenario] += 1;
    }

    const sec = Number(row[idxSeconds]);
    if (sec > 0) {
      secondsTotal += sec;
      secondsCount += 1;
    }

    if (String(row[idxInterest] || '').trim()) {
      interestSelected += 1;
    }
    if (idxPriorityTs > -1 && row[idxPriorityTs]) {
      priorityClicks += 1;
    }
  });

  const respondedCount = uniqueResponded.size;
  const pendingCount = Math.max(0, totalStudents - respondedCount);
  const responseRate = totalStudents > 0
    ? Math.round((respondedCount / totalStudents) * 100)
    : 0;
  const avgSeconds = secondsCount > 0
    ? Math.round((secondsTotal / secondsCount) * 10) / 10
    : 0;

  const crmNoStudents = students.filter(function(s) {
    return normalizeHeader_(s.interaccion_crm) === 'no';
  });
  const crmNoResponded = crmNoStudents.filter(function(s) {
    return uniqueResponded.has(String(s.email || '').toLowerCase());
  }).length;
  const crmNoPending = crmNoStudents.length - crmNoResponded;
  const crmNoRate = crmNoStudents.length > 0
    ? Math.round((crmNoResponded / crmNoStudents.length) * 100)
    : 0;

  return [
    'Estudiantes en lista: ' + totalStudents,
    'Estudiantes que respondieron: ' + respondedCount,
    'Estudiantes pendientes: ' + pendingCount,
    'Tasa de respuesta: ' + responseRate + '%',
    '',
    'Poblacion Interaccion CRM = No:',
    '- Total: ' + crmNoStudents.length,
    '- Respondieron: ' + crmNoResponded,
    '- Pendientes: ' + crmNoPending,
    '- Tasa de respuesta: ' + crmNoRate + '%',
    '',
    'Distribucion de perfil:',
    '- Consolidado: ' + scenarioCounts.Consolidado,
    '- Desarrollo: ' + scenarioCounts.Desarrollo,
    '- Oportunidad: ' + scenarioCounts.Oportunidad,
    '',
    'Promedio de tiempo de completado: ' + avgSeconds + ' s',
    'Estudiantes con prioridad seleccionada: ' + interestSelected,
    'Clicks de prioridad desde correo: ' + priorityClicks
  ].join('\n');
}
