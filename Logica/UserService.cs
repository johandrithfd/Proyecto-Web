using System;
using Datos;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using Entidad;



namespace Logica
{
    public class UserService
    {
        private readonly VeterinariaContext _context;
        public UserService(VeterinariaContext context)=> _context = context;
        
        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.UserName == userName && t.Password == password);
        }

        public GuardarResponseUsr Guardar(User user)
        {   
            _context.Users.Add(user);
            _context.SaveChanges();
            return new GuardarResponseUsr(user);
        }

    }

    public class GuardarResponseUsr
    {
        public GuardarResponseUsr(User user)
        {
            Error = false;
            User = user;
        }
        public GuardarResponseUsr(string mensaje)
        {      
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public User User { get; set; }
    }
}
