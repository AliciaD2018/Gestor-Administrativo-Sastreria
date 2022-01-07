class Materiales {
  final int codigo;
  final String categoria;
  final String descripcion;
  final int cantidad;

  const Materiales(
      {required this.codigo,
      required this.categoria,
      required this.descripcion,
      required this.cantidad});
}

final materiales = [
  new Materiales(codigo: 001, categoria: 'Tela', descripcion: 'Europe tela', cantidad: 10),
  new Materiales(codigo: 002, categoria: 'Tela', descripcion: 'spain tela', cantidad: 8),
];
