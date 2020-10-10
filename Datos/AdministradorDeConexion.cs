using System;
using System.Data.SqlClient;
using Entidad;

namespace Datos {
    public class AdministradorDeConexion {
        internal SqlConnection _conexion;
        public AdministradorDeConexion (string connectionString) {
            _conexion = new SqlConnection (connectionString);
        }
        public void Open () {
            _conexion.Open ();
        }
        public void Close () {
            _conexion.Close ();
        }
    }
}
