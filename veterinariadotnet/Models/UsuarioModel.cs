using System.Data.Common;
using System;
using Entidad;

namespace veterinariadotnet.Models
{
    public class UsuarioInputModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email {get;set;}
        public string Identificacion{get;set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Role {get;set;}
        public string MobilePhone {get;set;}
    }

    public class UsuarioViewModel : UsuarioInputModel
    {
        public string Token {get;set;} 
        public UsuarioViewModel()
        {  
        }
        public UsuarioViewModel(User usuario)
        {
            UserName= usuario.UserName;
            Password= usuario.Password;
            Email=usuario.Email;
            Identificacion=usuario.identificacion;
            FirstName= usuario.FirstName;
            LastName= usuario.LastName;
            Role=usuario.Role;
            MobilePhone=usuario.MobilePhone;
            
        }
    }
}
