import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  iniciarVideos(id: number): any{
    let modulo: number = +id;
    switch (modulo) {
      case 1:
        return this.videoConociendoExcel;
      case 2:
        return this.videoFormulasFunciones;
      case 3:
        return this.videoTablaDinamica;
      case 4:
        return this.videoDashboard;
    }
  }

  getSecciones(): any {
    return this.secciones;
  }

  private videoConociendoExcel = [
    {
      name: 'Introducción y navegación',
      src: './assets/videos/EXCEL/Conociendo Excel/1. Introduccion y navegacion.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Libro1.xlsx',
          src: './assets/archivos/excel/Libro1.xlsx'
        }
      ]
    },
    {
      name: 'Referencias relativas y absolutas',
      src: './assets/videos/EXCEL/Conociendo Excel/2. Referencias relativas y absolutas.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Referencias absolutas y relat..',
          src: './assets/archivos/excel/Referencias_absolutas_y_relativas.xlsx'
        }
      ]
    },
    {
      name: 'Referencias mixtas',
      src: './assets/videos/EXCEL/Conociendo Excel/3. Referencias mixtas.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Referencias mixtas',
          src: './assets/archivos/excel/Referencias mixtas.xlsx'
        }
      ]
    },
    {
      name: 'Filtrar',
      src: './assets/videos/EXCEL/Conociendo Excel/4. Filtrar.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Filtrar.xlsx',
          src: './assets/archivos/excel/Filtrar.xlsx'
        }
      ]
    },
    {
      name: 'Ordenar',
      src: './assets/videos/EXCEL/Conociendo Excel/5. Ordenar.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Formato condicional',
      src: './assets/videos/EXCEL/Conociendo Excel/6. Formato condicional.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Formato condicional.xlsx',
          src: './assets/archivos/excel/Formato condicional.xlsx'
        }
      ]
    },
    {
      name: 'Formato condicional avanzado',
      src: './assets/videos/EXCEL/Conociendo Excel/7. Formato condicional avanzado.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Formato condicional con fór...',
          src: './assets/archivos/excel/Formato condicional con fórmulas.xlsx'
        }
      ]
    },
    {
      name: 'Transformar fichero .CSV',
      src: './assets/videos/EXCEL/Conociendo Excel/8. Transformar fichero .CSV.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'AAPL.csv',
          src: './assets/archivos/excel/AAPL.csv'
        }
      ]
    },
    {
      name: 'Solver',
      src: './assets/videos/EXCEL/Conociendo Excel/9. Solver.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Solver.xlsx',
          src: './assets/archivos/excel/Solver.xlsx'
        },
        {
          name: 'Solver - Sin resolver.xlsx',
          src: './assets/archivos/excel/Solver - Sin resolver.xlsx'
        }
      ]
    }
  ]

  private videoFormulasFunciones = [
    {
      name: 'Fórmulas y funciones',
      src: './assets/videos/EXCEL/Formulas_funciones/1. Formulas y funciones.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Funciones matemáticas',
      src: './assets/videos/EXCEL/Formulas_funciones/2. Funciones matematicas.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Funciones matemáticas.xlsx',
          src: './assets/archivos/excel/Funciones matemáticas1.xlsx'
        }
      ]
    },
    {
      name: 'Funciones condiciones SI y SI.ERROR',
      src: './assets/videos/EXCEL/Formulas_funciones/3. Funciones condicionales SI y SI.ERROR.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Condicionales.xlsx',
          src: './assets/archivos/excel/Condicionales.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de texto',
      src: './assets/videos/EXCEL/Formulas_funciones/4. Funciones de texto.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Funciones de texto.xlsx',
          src: './assets/archivos/excel/Funciones de texto.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de texto 2',
      src: './assets/videos/EXCEL/Formulas_funciones/5. Funciones de texto (2).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Práctica con funciones de texto',
      src: './assets/videos/EXCEL/Formulas_funciones/6. Practica con funciones de texto.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Práctica con funciones de texto.xlsx',
          src: './assets/archivos/excel/Práctica con funciones de texto.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de fecha y hora',
      src: './assets/videos/EXCEL/Formulas_funciones/7. Funciones de fecha y hora.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Funciones matemáticas y condicionales',
      src: './assets/videos/EXCEL/Formulas_funciones/8. Funciones matematicas y condicionales.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Funciones matemáticas y condicionales.xlsx',
          src: './assets/archivos/excel/Funciones matemáticas y condicionales.xlsx'
        }
      ]
    },
    {
      name: 'Práctica funciones matemáticas y condicionales',
      src: './assets/videos/EXCEL/Formulas_funciones/9. Practica funciones matematicas y condicionales.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Cálculos matemáticos.xlsx',
          src: './assets/archivos/excel/Cálculos matemáticos.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de búsqueda BUSCARV (1)',
      src: './assets/videos/EXCEL/Formulas_funciones/10. Funciones de busqueda BUSCARV (1).mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Buscarv.xlsx',
          src: './assets/archivos/excel/Buscarv.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de búsqueda BUSCARV (2)',
      src: './assets/videos/EXCEL/Formulas_funciones/11. Funciones de busqueda BUSCARV (2).mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Buscarv 2.xlsx',
          src: './assets/archivos/excel/Buscarv 2.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de búsqueda BUSCARV (3)',
      src: './assets/videos/EXCEL/Formulas_funciones/12. Funciones de busqueda BUSCARV (3).mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Buscarv VARIOS RESULTADOS.xlsx',
          src: './assets/archivos/excel/Buscarv VARIOS RESULTADOS.xlsx'
        }
      ]
    },
    {
      name: 'Práctica quitando valores duplicados con BUSCARV',
      src: './assets/videos/EXCEL/Formulas_funciones/13. Practica Quitando valores duplicados con BUSCARV.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Buscarv - Duplicados.xlsx',
          src: './assets/archivos/excel/Buscarv - Duplicados.xlsx'
        }
      ]
    },
    {
      name: 'Funciones de búsqueda INDICE y COINCIDIR',
      src: './assets/videos/EXCEL/Formulas_funciones/14. Funciones de busqueda INDICE Y COINCIDIR.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Índice y coincidir.xlsx',
          src: './assets/archivos/excel/Índice y coincidir.xlsx'
        }
      ]
    }
  ]

  private videoTablaDinamica = [
    {
      name: 'Tablas y rangos',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/1. Tablas y rangos.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Tabla y rango.xlsx',
          src: './assets/archivos/excel/Tabla y rango.xlsx'
        }
      ]
    },
    {
      name: 'Tablas dinámicas',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/2. Tablas dinamicas.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Tablas dinámicas.xlsx',
          src: './assets/archivos/excel/Tablas dinámicas.xlsx'
        }
      ]
    },
    {
      name: 'Cuadro de mando (1)',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/3. Cuadro de mando (1).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Cuadro de mando (2)',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/4. Cuadro de mando (2).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Cuadro de mando (3)',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/5. Cuadro de mando (3).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Estilo y análisis del cuadro de mando',
      src: './assets/videos/EXCEL/Tablas dinamicas y cuadro de mando/6. Estilo y analisis del cuadro de mando.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Cuadro de mando.xlsx',
          src: './assets/archivos/excel/Cuadro de mando.xlsx'
        }
      ]
    },
  ]

  private videoDashboard = [
    {
      name: 'Modelo de datos (1)',
      src: './assets/videos/EXCEL/Dashboard interactivo/1. Modelado de datos (1).mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Dashboard.xlsx',
          src: './assets/archivos/excel/Dashboard.xlsx'
        }
      ]
    },
    {
      name: 'Modelo de datos (2)',
      src: './assets/videos/EXCEL/Dashboard interactivo/2. Modelado de datos (2).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Objetivos y estilo',
      src: './assets/videos/EXCEL/Dashboard interactivo/3. Objetivos y estilo.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Dashboard+Excel.xlsx',
          src: './assets/archivos/excel/Dashboard+Excel.xlsx'
        }
      ]
    },
    {
      name: 'Gráfico de líneas',
      src: './assets/videos/EXCEL/Dashboard interactivo/4. Grafico de lineas.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico circular',
      src: './assets/videos/EXCEL/Dashboard interactivo/5. Grafico circular.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de columnas',
      src: './assets/videos/EXCEL/Dashboard interactivo/6. Grafico de columnas.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de barras',
      src: './assets/videos/EXCEL/Dashboard interactivo/7. Grafico de barras.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de jerarquía',
      src: './assets/videos/EXCEL/Dashboard interactivo/8. Grafico de jerarquia.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de tarjeta',
      src: './assets/videos/EXCEL/Dashboard interactivo/9. Grafico de tarjeta.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de tabla',
      src: './assets/videos/EXCEL/Dashboard interactivo/10. Grafico de tabla.mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de segmentación de datos (1)',
      src: './assets/videos/EXCEL/Dashboard interactivo/11. Grafico de segmentacion de datos (1).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Gráfico de segmentación de datos (2)',
      src: './assets/videos/EXCEL/Dashboard interactivo/12. Grafico de segmentacion de datos (2).mp4',
      type: 'video/mp4'
    },
    {
      name: 'Ajustes finales y presentación',
      src: './assets/videos/EXCEL/Dashboard interactivo/13. Ajustes finales y presentacion.mp4',
      type: 'video/mp4',
      recursos: [
        {
          name: 'Dashboard Excel.xlsx',
          src: './assets/archivos/excel/Dashboard Excel.xlsx'
        }
      ]
    },
  ]

  private secciones = [
    {
      id: 1,
      name: 'Conociendo Excel',
      videos: this.videoConociendoExcel
    },
    {
      id: 2,
      name: 'Fórmulas y funciones',
      videos: this.videoFormulasFunciones
    },
    {
      id: 3,
      name: 'Tablas dinámicas',
      videos: this.videoTablaDinamica
    },
    {
      id: 4,
      name: 'Dashboard interactivo',
      videos: this.videoDashboard
    }
  ]
}
