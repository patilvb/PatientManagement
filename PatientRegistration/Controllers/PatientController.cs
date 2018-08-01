using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientRegistration.Models;

namespace PatientRegistration.Controllers
{
    
    public class PatientController : Controller
    {
        List<Patient> patients = new List<Patient>();

        [HttpGet]
        [Route("api/patient/all")]
        public IList<Patient> GetAll()
        {
            
            patients.Add(new Patient { Id = 1, Name = "Vikram", Surname = "Patil", DOB = "11/11/2011", Cityname = "Pune", Gender = "Male", Statename = "Maharashtra" });

            return patients;
        }

        [HttpPost]
        [Route("api/patient/create")]
        public void Create([FromBody]Patient patient)
        {
            patients.Add(patient);
        }

    }
}
