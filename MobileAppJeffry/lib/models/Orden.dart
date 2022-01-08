// ignore_for_file: prefer_const_constructors

class Orden {
  final int numeroOrden;
  final String cliente;
  final String fechaEntrega;

  const Orden({
    required this.numeroOrden,
    required this.cliente,
    required this.fechaEntrega,
  });
}

final ordenes = [
  Orden(
      numeroOrden: 1284,
      cliente: 'Santiago Montiel',
      fechaEntrega: '07/01/2022'),
  Orden(
      numeroOrden: 1288, cliente: 'Maria Calderon', fechaEntrega: '07/01/2022'),
  Orden(
      numeroOrden: 1289, cliente: 'Victor Cordoba', fechaEntrega: '10/01/2022'),
  Orden(
      numeroOrden: 1290,
      cliente: 'Cristobal Viquez',
      fechaEntrega: '10/01/2022'),
  Orden(numeroOrden: 1292, cliente: 'Lupita', fechaEntrega: '10/01/2022'),
];
