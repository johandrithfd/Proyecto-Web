using Entidad;

namespace veterinariadotnet.Models
{
    public class DetalleFacturaInputModel 
    {
        public int ServicioId { get; set; }
        public decimal ValorServicio {get; set;}
        public int Cantidad {get; set;}
        public decimal PorcentajeDescuento {get; set;}
        public decimal PorcentajeIva {get; set;}
    }
    public class DetalleFacturaViewModel : DetalleFacturaInputModel
    {
        public DetalleFacturaViewModel()
        {
            
        }
        public DetalleFacturaViewModel(DetalleFactura detalleFactura)
        {
            IdDetalleFactura = detalleFactura.IdDetalleFactura;
            ServicioId = detalleFactura.ServicioId;
            ValorServicio = detalleFactura.ValorServicio;
            Cantidad = detalleFactura.Cantidad;
            PorcentajeDescuento = detalleFactura.PorcentajeDescuento;
            PorcentajeIva = detalleFactura.PorcentajeIva;
        }
        public int IdDetalleFactura {get; set;}
    }
}