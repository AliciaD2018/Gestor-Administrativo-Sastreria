// ignore_for_file: prefer_const_constructors, unnecessary_new, avoid_print

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/models/Articulo.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';

bool tonoColor = false;

class Lista_Faltantes extends StatelessWidget {
  const Lista_Faltantes({Key? key}) : super(key: key);

  Future<List<Articulo>> _selectMaterials() async {
    String url = 'http://192.168.0.148:4500/api/selectmissingmaterialsallorders';
    final response = await http.get(Uri.parse(url));
    List<Articulo> articulos = [];

    if (response.statusCode == 200) {
      String strData = utf8.decode(response.bodyBytes);
      final jsonData = jsonDecode(strData);
      List elementos = jsonData['materialesfaltantestodaslasordenes'];

      for (var i = 0; i < elementos.length; i++) {
        articulos.add(Articulo(
            categoria: elementos[i]["CategoriaMaterial"],
            descripcion: elementos[i]["Descripcion"],
            cantidad: elementos[i]["Cantidad"],
            unidadMedida: elementos[i]['Simbolo']));
      }

      // print(articulos);
      return articulos;
    } else {
      throw Exception("Connection failed");
    }
  }

  @override
  Widget build(BuildContext context) {
    Future<List<Articulo>> inventario = _selectMaterials();
    return MaterialApp(
        title: 'Materiales',
        theme: ThemeData(
          primarySwatch: Colors.teal,
        ),
        home: Scaffold(
            appBar: AppBar(
              title: Text('Articulos Faltantes'),
            ),
            body: FutureBuilder(
              future: inventario,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return ListView(
                    children: _buildItem(snapshot.data),
                  );
                } else if (snapshot.hasError) {
                  print(snapshot.error);
                  return Text("Error");
                }
                return Center(
                  child: CircularProgressIndicator(),
                );
              },
            )));
  }
}

List<Widget> _buildItem(datos) {
  bool value = false;
  List<Widget> inventario = [];
  Color colorLinea;

  for (var articulo in datos) {
    tonoColor = !tonoColor;

    if (tonoColor) {
      colorLinea = Color.fromARGB(255, 169, 218, 243);
    } else {
      colorLinea = Color.fromARGB(255, 107, 186, 226);
    }

    inventario.add(ListTile(
      title: Text(articulo.categoria),
      subtitle: Column(children: <Widget>[
        Text('Descripcion: ${articulo.descripcion}',
            style: new TextStyle(fontWeight: FontWeight.bold)),
        Text('Cantidad: ${articulo.cantidad} ${articulo.unidadMedida}',
            style: new TextStyle(fontWeight: FontWeight.bold))
      ]),
      tileColor: colorLinea,
      leading: Icon(Icons.checkroom),
      contentPadding: EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
      iconColor: Colors.black,
      onTap: () {
        print(articulo.descripcion);
      },
    ));
  }
  return inventario;
}

