import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SapService {
  constructor() {}

  getSecciones(): any{
    return this.secciones;
  }

  iniciarVideos(id: number): any {
    let modulo: number = +id;
    switch (modulo) {
      case 1:
        return this.videoFinanzas;
      case 2:
        return this.videoVentas;
      case 3:
        return this.videoCompras;
      case 4:
        return this.videoInventario;
      case 5:
        return this.videoProduccion;
      default:
        console.log('No existe');
        break;
    }
  }

    private videoCompras = [
    {
      name: '1. Oferta de compra',
      src: './assets/videos/SAP/Compras/1_Oferta_de_compra.mp4',
      type: 'video/mp4',
    },
    {
      name: '2. Pedido de proveedores',
      src: './assets/videos/SAP/Compras/2_Pedido_de_proveedores.mp4',
      type: 'video/mp4',
    },
    {
      name: '3. Entrada de Mercancias',
      src: './assets/videos/SAP/Compras/3_Entrada_de_Mercancias.mp4',
      type: 'video/mp4',
    },
    {
      name: '4. Costo de Importación',
      src: './assets/videos/SAP/Compras/4_Costo_de_Importacion.mp4',
      type: 'video/mp4',
    },
    {
      name: '5. Factura de Proveedores',
      src: './assets/videos/SAP/Compras/5_Factura_de_Proveedores.mp4',
      type: 'video/mp4',
    },
    {
      name: '6. Devoluciones',
      src: './assets/videos/SAP/Compras/6_Devoluciones.mp4',
      type: 'video/mp4',
    },
    {
      name: '7. Nota de Crédito Proveedores',
      src: './assets/videos/SAP/Compras/7_Nota_de_credito_Proveedores.mp4',
      type: 'video/mp4',
    },
    {
      name: '8. Nota de Débito',
      src: './assets/videos/SAP/Compras/8_Nota_de_Debito.mp4',
      type: 'video/mp4',
    },
    {
      name: '9. Factura de Anticipo Proveedores',
      src: './assets/videos/SAP/Compras/9_Factura_de_Anticipo_proveedores.mp4',
      type: 'video/mp4',
    },
    // {
    //   name: '10. Factura de Reserva',
    //   src: './assets/videos/SAP/Compras/10_Factura_de_reserva.mp4',
    //   type: 'video/mp4'
    // }
  ];

  private videoFinanzas = [
    {
      name: '1. Estructura de cuenta',
      src: './assets/videos/SAP/Finanzas/1_Estructura_de_Cuenta.mp4',
      type: 'video/mp4',
    },
    {
      name: '2. Mover cuenta contable',
      src: './assets/videos/SAP/Finanzas/2_Mover_Cuenta_Contable.mp4',
      type: 'video/mp4',
    },
    {
      name: '3. Crear Cuenta',
      src: './assets/videos/SAP/Finanzas/3_Crear_Cuenta.mp4',
      type: 'video/mp4',
    },
    {
      name: '4. Borrar Cuenta',
      src: './assets/videos/SAP/Finanzas/4_Eliminar_Cuenta.mp4',
      type: 'video/mp4',
    },
    {
      name: '5. Asiento Contable',
      src: './assets/videos/SAP/Finanzas/5_Asiento_Contable.mp4',
      type: 'video/mp4',
    },
    {
      name: '6. Depositos',
      src: './assets/videos/SAP/Finanzas/6_Depositos.mp4',
      type: 'video/mp4',
    },
  ];

  private videoInventario = [
    {
      name: '1. Entrada y salida de mercancia',
      src: './assets/videos/SAP/Inventario/1_Entrada_y_Salida_de_mercancias.mp4',
      type: 'video/mp4',
    },
    {
      name: '2. Transferencia de Stock',
      src: './assets/videos/SAP/Inventario/2_Transferencia_de_stock.mp4',
      type: 'video/mp4',
    },
    {
      name: '3. Recuento y contabilizacion de inventario',
      src: './assets/videos/SAP/Inventario/3_Recuento_y_contabilizacion_de_inventario.mp4',
      type: 'video/mp4',
    },
    {
      name: '4. Revalorización de inventario',
      src: './assets/videos/SAP/Inventario/4_Revalorizacion_de_inventario.mp4',
      type: 'video/mp4',
    },
    {
      name: '5. Lista de precios',
      src: './assets/videos/SAP/Inventario/5_Lista_de_precios.mp4',
      type: 'video/mp4',
    },
    {
      name: '6. Descuento por periodo y cantidad',
      src: './assets/videos/SAP/Inventario/6_Descuento_por_periodo_y_cantidad.mp4',
      type: 'video/mp4',
    },
    {
      name: '7. Precios especiales para socios de negocios',
      src: './assets/videos/SAP/Inventario/7_Precios_especiales_para_socios_de_negocios.mp4',
      type: 'video/mp4',
    },
    {
      name: '8. Grupo de descuento',
      src: './assets/videos/SAP/Inventario/8_Grupo_de_descuento.mp4',
      type: 'video/mp4',
    },
  ];

  private videoProduccion = [
    {
      name: '1. Lista de materiales',
      src: './assets/videos/SAP/Produccion/1_Lista_de_materiales.mp4',
      type: 'video/mp4',
    },
    {
      name: '2. Orden de fabricación, Recibo y Emision de producción',
      src: './assets/videos/SAP/Produccion/2_Orden_de_fabricacion_Recibo_y_Emision_de_produccion.mp4',
      type: 'video/mp4',
    },
    {
      name: '3. Informes de producción',
      src: './assets/videos/SAP/Produccion/3_Informes_de_produccion.mp4',
      type: 'video/mp4',
    },
  ];

  private videoVentas = [
    {
      name: '1. Oferta de Venta (Cotización)',
      src: './assets/videos/SAP/Ventas/1_Cotizacion.mp4',
      type: 'video/mp4',
    },
    {
      name: '2. Orden de Venta (Pedido)',
      src: './assets/videos/SAP/Ventas/2_Orden_de_Venta_(Pedido).mp4',
      type: 'video/mp4',
    },
    {
      name: '3. Entrega',
      src: './assets/videos/SAP/Ventas/3_Entrega.mp4',
      type: 'video/mp4',
    },
    {
      name: '4. Factura',
      src: './assets/videos/SAP/Ventas/4_Factura.mp4',
      type: 'video/mp4',
    },
    {
      name: '5. Devoluciones',
      src: './assets/videos/SAP/Ventas/5_Devoluciones.mp4',
      type: 'video/mp4',
    },
    {
      name: '6. Nota de credito',
      src: './assets/videos/SAP/Ventas/6_Nota_de_Credito.mp4',
      type: 'video/mp4',
    },
    {
      name: '7. Nota de Débito',
      src: './assets/videos/SAP/Ventas/7_Nota_de_Debito.mp4',
      type: 'video/mp4',
    },
    {
      name: '8. Factura de Anticipo',
      src: './assets/videos/SAP/Ventas/8_Factura_de_Anticipo.mp4',
      type: 'video/mp4',
    },
    {
      name: '9. Factura de Reserva',
      src: './assets/videos/SAP/Ventas/9_Factura_de_Reserva.mp4',
      type: 'video/mp4',
    },
    {
      name: '10. Periodo Contable',
      src: './assets/videos/SAP/Ventas/10_Periodo_Contable.mp4',
      type: 'video/mp4',
    },
    {
      name: '11. Mapa de Relaciones',
      src: './assets/videos/SAP/Ventas/11_Mapa_de_Relaciones.mp4',
      time: '4 min',
      type: 'video/mp4',
    },
    {
      name: '12. Analisis de Ventas',
      src: './assets/videos/SAP/Ventas/12_Analisis_de_Ventas.mp4',
      time: '4 min',
      type: 'video/mp4',
    },
    {
      name: '13. Lista de partidas Abiertas',
      src: './assets/videos/SAP/Ventas/13_Lista_de_partidas_Abiertas.mp4',
      type: 'video/mp4',
    },
  ];

  private secciones = [
    {
      id: 1,
      name: 'Finanzas',
      videos: this.videoFinanzas
    },
    {
      id: 2,
      name: 'Ventas',
      videos: this.videoVentas
    },
    {
      id: 3,
      name: 'Compras',
      videos: this.videoCompras
    },
    {
      id: 4,
      name: 'Inventarios',
      videos: this.videoInventario
    },
    {
      id: 5,
      name: 'Producción',
      videos: this.videoProduccion
    },
  ]
}
