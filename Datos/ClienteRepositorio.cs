using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Entidad;

namespace Datos {
    public class ClienteRepositorio {
        private readonly SqlConnection _connection;
        private readonly List<Cliente> clientes = new List<Cliente> ();
        public ClienteRepositorio (AdministradorDeConexion connection) {
            _connection = connection._conexion;
        }
        public void Guardar (Cliente cliente) {
            using (var command = _connection.CreateCommand ()) {
                command.CommandText = @"Insert Into Cliente (Identificacion,Nombres,PrimerApellido,SegundoApellido,Telefono,Celular,Direccion,Correo) 
                                        values (@Identificacion,@Nombres,@PrimerApellido,@SegundoApellido,@Telefono,@Celular,@Direccion,@Correo)";
                command.Parameters.AddWithValue ("@Identificacion", cliente.Identificacion);
                command.Parameters.AddWithValue ("@Nombres", cliente.Nombres);
                command.Parameters.AddWithValue ("@PrimerApellido", cliente.PrimerApellido);
                command.Parameters.AddWithValue ("@SegundoApellido", cliente.SegundoApellido);
                command.Parameters.AddWithValue ("@Telefono", cliente.Telefono);
                command.Parameters.AddWithValue ("@Celular", cliente.Celular);
                command.Parameters.AddWithValue ("@Direccion", cliente.Direccion);
                command.Parameters.AddWithValue ("@Correo", cliente.Correo);
                var filas = command.ExecuteNonQuery ();
            }
        }

        public List<Cliente> ConsultarClientes () {
            SqlDataReader dataReader;
            List<Cliente> clientes = new List<Cliente> ();
            using (var command = _connection.CreateCommand ()) {
                command.CommandText = "Select * from Cliente ";
                dataReader = command.ExecuteReader ();
                if (dataReader.HasRows) {
                    while (dataReader.Read ()) {
                        Cliente cliente = DataReaderMapToCliente (dataReader);
                        clientes.Add (cliente);
                    }
                }
            }
            return clientes;
        }

        private Cliente DataReaderMapToCliente (SqlDataReader dataReader) {
              if (!dataReader.HasRows) return null;
            Cliente cliente = new Cliente();
            cliente.Identificacion = (string) dataReader["Identificacion"];
            cliente.Nombres = (string) dataReader["Nombres"];
            cliente.PrimerApellido = (string) dataReader["PrimerApellido "];
            cliente.SegundoApellido = (string) dataReader["SegundoApellido"];
            cliente.Telefono = (string) dataReader["Telefono"];
            cliente.Celular = (string) dataReader["Celular"];
            cliente.Direccion = (string) dataReader["Direccion"];
            cliente.Correo = (string) dataReader["Correo"];
            return cliente;
    }
}
}