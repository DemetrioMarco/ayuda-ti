import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  constructor() { }

  iniciarVideos(id: number): any{
    let modulo: number = +id;
    switch (modulo) {
      case 1:
        return this.seccionUno;
      case 2:
        return this.seccionDos;
      case 3:
        return this.seccionTres;
    }
  }

  getSecciones(): any{
  return this.secciones
  }


  private seccionUno = [
    {
      name: 'Indroducción a Planner',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/1.Introduccio.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo acceder a Planner',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/2.Como_acceder.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo acceder a Planner desde Teams',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/3.Como_acceder_desde_Teams.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Menú principal de Planner',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/4.Menu_principal.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Configuración general de Planner',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/5.Configuracion_general.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear un plan en Planner',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/6.Como_crear_un_Plan.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Vistas disonibles de las Tareas de tu Plan',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/7.Vistas_disponibles_de_las_Tareas.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear una tarea y definir sus características',
      src: './assets/videos/PLANNER/1_FUNCIONALIDADES _BASICAS/8.Como_crear_una_Tarea_y_definir_sus_caracteristicas.mp4',
      type: 'video/mp4',
    },
  ]

  private seccionDos = [
    {
      name: 'Perspectivas de planificación',
      src: './assets/videos/PLANNER/2_PRINCIPIOS_BASICOS_DE_UNA_PLANIFICACION_REALISTA/1.Perspectivas_de_planificacion.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo evitar el error nº 1 de la planificación',
      src: './assets/videos/PLANNER/2_PRINCIPIOS_BASICOS_DE_UNA_PLANIFICACION_REALISTA/2.Como_evitar_el_error_n_1_de_la_planificacion.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Los tipos de tareas que debes identificar para planificarte de forma realista',
      src: './assets/videos/PLANNER/2_PRINCIPIOS_BASICOS_DE_UNA_PLANIFICACION_REALISTA/3.Los_tipos_de_tareas_que_debes_identificar.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Determina qué va en el Calendario de Outlook y qué va en el Planner',
      src: './assets/videos/PLANNER/2_PRINCIPIOS_BASICOS_DE_UNA_PLANIFICACION_REALISTA/4.Determina_que_va_en_el_Calendario_de_Outlook.mp4',
      type: 'video/mp4',
    },
  ]

  private seccionTres = [
    {
      name: 'La foto final de tu planificación individual en Planner',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/1.La_foto_final_de_tu_Planificacion_Individual.mp4',
      type: 'video/mp4',
    },
    {
      name: 'El diseño ideal de un Plan para planificación a corto plazo',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/2.El_diseno_ideal_de_un_Plan_para_planificarse_a_corto_plazo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear el inventario de tareas puntuales',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/3.Como_crear_el_Inventario_de_Tareas_Puntuales.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo definir una tarea puntual',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/4.Como_definir_una_Tarea_Puntual.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo añadir las tareas de control de alta frecuencia a tu calendario',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/5.Como_añadir_las_Tareas_de_Control_de_alta_frecuencia_a_tu_Plan.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Inventario de tareas...',
          src:'./assets/archivos/planner/Inventario de Tareas de Control.xlsx'
        }
      ]
    },
    {
      name: 'Cómo añadir las tareas de control de baja frecuencia a tu calendario',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/6.Como_añadir_las_Tareas_de_Control_de_baja_frecuencia_a_tu_Calendario.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo hacer la revisión semanal de tus tareas',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/7.Como_hacer_la_Revision_Semanal_de_tus_tareas.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo hacer la revisión diaria de tus tareas',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/8.Como_hacer_la_Revision_Diaria_de_tus_tareas.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo gestionar las tareas imprevistas que van llegando',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/9.Como_gestionar_las_Tareas_Imprevistas_que_van_llegando.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Qué hacer con  las tareas completadas',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/10.Que_hacer_con_las_tareas_completadas.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo gestionar las tareas que se acumulan',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/11.Como_gestionar_las_tareas_que_se_acumulan.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo gestionar tus tareas diarias en el Plan Semanal (vista Cuadrícula',
      src: './assets/videos/PLANNER/3_PLANIFICACION_INDIVIDUAL/12.Como_gestionar_tus_tareas_diarias_en_el_Plan_Semanal.mp4',
      type: 'video/mp4',
    },
  ]

  private seccionCuatro = [
    {
      name: 'La foto final de la gestión de Proyectos en Planner',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/1.La_foto_final_de_la_Gestion_de_Proyectos_en_Equipo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Introducción de los proyectos en equipo',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/2.Introduccion_de_los_proyectos_en_equipo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'El diseño ideal de un Plan para gestionar proyectos en equipo',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/3.El_diseño_ideal_de_un_Plan_para_gestionar_proyectos_en_equipo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'El inventario de tareas puntuales para los proyectos en equipo',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/4.El_Inventario_de_Tareas_Puntuales_para_los_proyectos_en_equipo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Las fases del proyecto',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/5.Las_fases_del_proyecto.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear una tarea y determinar su estado en los proyectos',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/6.Como_crear_una_Tarea_y_determinar_su_estado_en_los_proyectos.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo determinar los miembros que forman parte del proyecto',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/7.Como_determinar_los_miembros_que_forman_parte_del_proyecto.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo gestionar las tareas asignadas a ti en Planner',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/8.Como_gestionar_las_tareas_Asignadas_a_ti.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo añadir personas externas de la organización al proyecto',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/9.Como_añadir_personas_externas_de_la_organizacion_al_proyecto.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo asignar tareas a los miembros del equipo',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/10.Como_asignar_tareas_a_los_miembros.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo usar los filtros para hacer el seguimiento del proyecto',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/11.Como_usar_los_filtros_para_hacer_el_seguimiento_del_proyecto.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo visualizar la programación temporal de las fases del proyecto',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/12.Como_visualizar_la_programacion_temporal_de_las_fases_del_proyecto.mp4',
      type: 'video/mp4',
    },
    {
      name: 'La foto final de tu planificación en equipo (Incluyendo tareas control)',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/13.La_foto_final_de_tu_Planificacion_en_Equipo.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear un inventario de planes cuando manejas muchos proyectos',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/14.Como_crear_un_Inventario_de_Planes_cuando_manejas_muchos_proyectos.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo lograr que tu equipo use Planner para la gestión de proyectos',
      src: './assets/videos/PLANNER/4_GESTION_EFECTIVA_DE_PROYECTOS EN EQUIPO/15.Como_lograr_que_tu_equipo_use_Planner_para_la_gestion_de_proyectos.mp4',
      type: 'video/mp4',
    }
  ]

  private seccionCinco = [
    {
      name: 'Ejemplo práctico para gestionar tareas de un departamento o de una PYME',
      src: './assets/videos/PLANNER/5_EJEMPLOS_DE_ PROYECTOS/1.Ejemplo_practico_para_Gestionar_tareas_de_un_Departamento.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Ejemplo práctico para crear un Plan de Negocios',
      src: './assets/videos/PLANNER/5_EJEMPLOS_DE_ PROYECTOS/2.Ejemplo_practico_para_crear_un_Plan_de_Negocio.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Ejemplo práctico para gestionar ideas',
      src: './assets/videos/PLANNER/5_EJEMPLOS_DE_ PROYECTOS/3.Ejemplo_practico_para_Gestionar_Ideas.mp4',
      type: 'video/mp4',
    }
  ]

  private seccionSeis = [
    {
      name: 'Cómo agregar la programación de un plan al calendario de Outlook',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/1.Como_agregar_la_programacion_de_un_plan_al_calendario_de_Outlook.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo combinar Microsoft Planner y Teams',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/2.Como_combinar_Microsoft_Planner_y_Microsoft_Teams.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo pasar de una conversación de Teams a una tarea en Planner',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/3.Como_pasar_de_una_Conversacion_de_Teams_a_una_Tarea_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo integrar Planner dentro de To Do (tareas asignadas a mí)',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/4.Como_integrar_Planner_dentro_de_To_Do.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo integrar Microsoft OneNote con Microsoft Planner',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/5.Como_integrar_Microsoft_OneNote_con_Microsoft_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo vincular SharePoint con Planner',
      src: './assets/videos/PLANNER/6_COMBINACION_DE_PLANNER_CON_OTRAS_HERRAMIENTAS/6.Como_vincular_SharePoint_con_Planner.mp4',
      type: 'video/mp4',
    }
  ]

  private seccionSiete = [
    {
      name: 'Qué es y dónde está Power Automate (Microsoft 365)',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/1.Que_es_y_donde_esta_Power_Automate.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Las combinaciones posibles entre Power Automate y Microsoft Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/2.Las_combinaciones_posibles_entre_Power_Automate_y_Microsoft Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo editar o borrar las automatizaciones entre Planner y Power Automate',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/3.Como_editar_o_borrar_las_automatizaciones_entre_Planner_y_Power_Automate.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo convertir un correo en una tarea de Planner con Power Automate',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/4.Como_convertir_un_correo_en_una_tarea_de_Planner_con_Power_Automate.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo enviar un correo a Outlook cuando te asignan una tarea en Microsoft Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/5.Como_enviar_un_Correo_a_Outlook_cuando_te_asignan_una tarea en Microsoft Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear una tarea de Planner en base a un evento del calendario Outlook',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/6.Como_crear_una_tarea_de_Planner_en_base_a_un_evento_del_calendario_de_Outlook.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo notificar a un Canal de Teams que una tarea fue completada en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/7.Como_notificar_a_un_Canal_de_Teams_que_una_tarea_fue_completada_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo copiar tareas de un depósito a otro en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/8.Como_copiar_tareas_de_un_Deposito_a_otro_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo pasar de una tarae de Planner a To Do',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/9.Como_pasar_de_una_tarea_de_Planner_a_To_Do.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Crear una tarea en Outlook cuando te la asignen en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/10.Crea_una_tarea_en_Outlook_cuando_te_la_asignen_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Crea un evento en Outlook en nuevas tareas en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/11.Crea_un_evento_en_Outlook_en_nuevas_tareas_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear una tarea en To Do cuando se añade una tarea a Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/12_Como_crear_una_tarea_en_To_Do_cuando_se_anade_una_tarea_a_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo enviar un correo cuando una nueva tarea se crea en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/13_Como_enviar_un_correo_cuando_una_nueva_tarea_se_crea_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear tareas de seguimiento en nuevas páginas de OneNote',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/14_Como_crear_tareas_de_seguimiento_en_nuevas_paginas_de_OneNote.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo publicar un mensaje en Teams cuando completes una tarea en Planner',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/15_Como_publicar_un_mensaje_en_Teams_cuando_completes_una_tarea_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear una tarea de revisión en Planner desde SharePoint',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/16_Como_crear_una_tarea_de_revision_en_Planner_desde_SharePoint.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Crear una tarea en Planner cuando escribes un mensaje en Teams',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/17_Crea_una_tarea_en_Planner_cuando_escribes_un_mensaje_en_Teams.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Crea un atajo para copiar tareas de Planner de un Plan a otro',
      src: './assets/videos/PLANNER/7_AUTOMATIZACIONES/18_Crea_un_atajo_para_copiar_tareas_de_Planner_de_un_plan_a_otro.mp4',
      type: 'video/mp4',
    }
  ]

  private seccionOcho = [
    {
      name: 'Cómo copiar un Plan basado en un Plan existente',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/1_Como_copiar_un_Plan_basado_en_un_Plan_existente.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo copiar un plan de Planner y asignarle un Equipo 365',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/2_Como_copiar_un_plan_de_Planner_y_asignarle_un_Equipo_en_365.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo borrar un plan de manera definitiva',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/3_Como_borrar_un_Plan_de_manera_definitiva.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Dónde están los archivos subidos en un plan',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/4_Donde_estan_los_archivos_subidos_en_un_Plan.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo crear tareas recurrentes',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/5_Como_crear_Tareas_Recurrentes.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo exportar un plan a Excel',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/6_Como_exportar_un_Plan_a_Excel.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo destacar los proyectos más relevantes cuando tienes muchos',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/7_Como_destacar_los_proyectos_mas_relevantes_cuando_tienes_muchos.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo aplicar más de un filtro en un plan',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/8_Como_aplicar_mas_de_un_filtro_en_un_Plan.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cómo añadir un Link visible en una tarea de Microsoft Planner',
      src: './assets/videos/PLANNER/8_FUNCIONALIDADES_AVANZADAS/9_Como_anadir_un_Link_visible_en_una_tarea_de_Microsoft_Planner.mp4',
      type: 'video/mp4',
    }
  ]

  private seccionNueve = [
    {
      name: 'Cómo acceder a la nueva versión de Planner',
      src: './assets/videos/PLANNER/9_NOVEDADES_PLANNER_2024/1_Como_acceder_a_la_nueva_version_de_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Nuevo menú principal en Planner',
      src: './assets/videos/PLANNER/9_NOVEDADES_PLANNER_2024/2_Nuevo_menu_principal_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Nuevas plantillas en Planner',
      src: './assets/videos/PLANNER/9_NOVEDADES_PLANNER_2024/3_Nuevas_Plantillas_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Compartir en Planner',
      src: './assets/videos/PLANNER/9_NOVEDADES_PLANNER_2024/4_Compartir_en_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Cometarios en Planner',
      src: './assets/videos/PLANNER/9_NOVEDADES_PLANNER_2024/5_Comentarios_en_Planner.mp4',
      type: 'video/mp4',
    },
  ]

  private seccionDiez = [
    {
      name: 'Visión limitada de múltiples proyectos en Microsoft Planner',
      src: './assets/videos/PLANNER/10_LIMITACIONES_DE_PLANNER/1_Vision_limitada_de_multiples_Proyectos_en_Microsoft_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Para qué proyectos no funciona Microsoft Planner',
      src: './assets/videos/PLANNER/10_LIMITACIONES_DE_PLANNER/2_Para_que_ proyectos_no_funciona_Microsoft_Planner.mp4',
      type: 'video/mp4',
    },
    {
      name: 'Alternativas a Microsoft Planner para gestionar Proyectos',
      src: './assets/videos/PLANNER/10_LIMITACIONES_DE_PLANNER/3_Alternativas_a_Microsoft_Planner_para_gestionar_Proyectos.mp4',
      type: 'video/mp4',
    },
  ]

  private secciones = [
    {
      name: 'Funcionalidades básicas de Planner',
      videos: this.seccionUno,
      time: '19 min'
    },
    {
      name: 'Principios básicos de Planificación realista',
      videos: this.seccionDos,
      time: '9 min'
    },
    {
      name: 'La planificación individual en Planner',
      videos: this.seccionTres,
      time: '50 min'
    },
    {
      name: 'La gestión efectiva de proyectos en equipo en Planner',
      videos: this.seccionCuatro,
      time: '52 min'
    },
    {
      name: 'Ejemplos de proyectos en Planner',
      videos: this.seccionCinco,
      time: '16 min'
    },
    {
      name: 'Combinación de Planner con otras herramientas',
      videos: this.seccionSeis,
      time: '20 min'
    },
    {
      name: 'Automatizaciones en Planner (Power Automate)',
      videos: this.seccionSiete,
      time: '1 hr 7 min'
    },
    {
      name: 'Funcionalidades avanzadas de Planner',
      videos: this.seccionOcho,
      time: '26 min'
    },
    {
      name: 'Novedades Planner 2024',
      videos: this.seccionNueve,
      time: '12 min'
    },
    {
      name: 'Limitaciones de Planner',
      videos: this.seccionDiez,
      time: '5 min'
    },
  ]
}
