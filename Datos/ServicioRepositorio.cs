using System.Data.Common;
using System;
using Entidad;
using System.Collections.Generic;
using System.Data.SqlClient;
namespace Datos
{
    public class ServicioRepositorio
    {
        private readonly List<Servicio> servicios = new List<Servicio>();
        private readonly SqlConnection _conexion;
        public ServicioRepositorio(AdministradorDeConexion administradorDeConexion)
        {
            _conexion = administradorDeConexion._conexion;
        }

        public void Guardar(Servicio servicio)
        {
            using (var comando = _conexion.CreateCommand())
            {
                comando.CommandText = @"Insert Into servicio (nombre,descripcion,valor,iva) 
                values (@nombre,@descripcion,@valor)";
                comando.Parameters.AddWithValue ("@nombre", servicio.Nombre);
                comando.Parameters.AddWithValue ("@descripcion", servicio.Descripcion);
                comando.Parameters.AddWithValue ("@valor", servicio.Valor);
                comando.Parameters.AddWithValue ("@iva", servicio.Iva);
                var filas = comando.ExecuteNonQuery ();
            }
        }
        public List<Servicio> ConsultarServicios ()
        {
            servicios.Clear();
            SqlDataReader lectorDatos;
            using (var comando = _conexion.CreateCommand())
            {
                comando.CommandText = "SELECT * FROM servicio";
                lectorDatos = comando.ExecuteReader();
                if(lectorDatos.HasRows)
                {
                    while(lectorDatos.Read())
                    {
                        Servicio servicio = MapearDatosAServicio(lectorDatos);
                        servicios.Add(servicio);
                    }
                }
            }
            return servicios;
        }

        public Servicio MapearDatosAServicio (SqlDataReader lectorDatos)
        {
            if(!lectorDatos.HasRows)
                return null;
            else
            {
                string nombre = (string) lectorDatos["nombre"];
                string descripcion = (string) lectorDatos["descripcion"];
                decimal valor = (decimal) lectorDatos["valor"];
                Servicio servicio = new Servicio(nombre,valor,descripcion);
                servicio.IdServicio = (int) lectorDatos["id_servicio"];
                servicio.Iva = (decimal) lectorDatos["iva"];
                return servicio;
            }
            
        }
    }
}
