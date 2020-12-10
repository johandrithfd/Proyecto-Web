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
                return new Respuesta<Factura>(factura, "Factura registrada con exito", false);
            }
            catch (Exception e)
            {
                Respuesta<Factura> respuesta = new Respuesta<Factura>(factura);
                respuesta.Mensaje = $"error {e.Message}";
                respuesta.Error = true;
                return respuesta;
            }
        }
        public RespuestaConsulta<Factura> Consutar()
        {
            List<Factura> facturas;
            try
            {
                facturas = _context.Facturas.Include(d => d.DetallesFactura).ToList();
                if (facturas.Count == 0)
                {
                    return new RespuestaConsulta<Factura>(facturas, "Oh no,no encontramos facturas", false);
                }
                return new RespuestaConsulta<Factura>(facturas, "Consulta de factura con  exito", false);
            }
            catch (Exception e)
            {
                RespuestaConsulta<Factura> respuesta = new RespuestaConsulta<Factura>();
                respuesta.Mensaje = $"error {e.Message}";
                respuesta.Error = true;
                return respuesta;
            }
        }

     }
        
}    

