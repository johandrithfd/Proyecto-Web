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
        private readonly  VeterinariaContext  _context;
        public FacturaServicio (VeterinariaContext context) {
            _context=context;
        }
        public GuardarFacturaResponse Guardar (Factura factura) {
            try
            {
                _context.Facturas.Add(factura);
                _context.SaveChanges();
                return new GuardarFacturaResponse(factura);
            }
            catch (Exception e)
            {
                return new GuardarFacturaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }
        public List<Factura> ConsultarFacturas () {
            List<Factura> facturas = _context.Facturas.Include(d => d.DetallesFactura.
                                                    Select(s => s.Servicio)).
                                                    ToList();
            return facturas;
        }
    }
        public class GuardarFacturaResponse {
        public GuardarFacturaResponse (Factura factura) {
            Error = false;
            Factura  = factura;
        }
        public GuardarFacturaResponse (string mensaje) {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Factura Factura { get; set; }
        }
    
}
