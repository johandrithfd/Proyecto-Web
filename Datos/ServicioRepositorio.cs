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
        
    }
}
