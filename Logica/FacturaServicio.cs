using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entidad;
using Microsoft.EntityFrameworkCore;

namespace Logica
{
    public class FacturaServicio
    {
        private readonly VeterinariaContext _context;
        public FacturaServicio(VeterinariaContext context)
        {
            _context = context;
        }
        public Respuesta<Factura> Guardar(Factura factura)
        {
            try
            {
                _context.Facturas.Add(factura);
                _context.SaveChanges();
                return new Respuesta<Factura>(factura,"Factura registrada con exito",false);
            }
            catch (Exception e)
            {
                Respuesta<Factura> respuesta = new Respuesta<Factura>(factura);
                respuesta.Mensaje = $"error {e.Message}";
                respuesta.Error = true;
                return respuesta;
            }
        }

    }
    
}
    

