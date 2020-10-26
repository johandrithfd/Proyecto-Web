using System;
using Microsoft.EntityFrameworkCore;
using Entidad;

namespace Datos
{
    public class VeterinariaContext : DbContext
    {
        public VeterinariaContext(DbContextOptions options) : base (options){
      
      }
      public DbSet <Cliente> Clientes {get;set;}
    }
}
