using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientRegistration.Models;

namespace PatientRegistration.Controllers
{
    public class SettingController : Controller
    {
        [HttpGet]
        [Route("api/setting/states")]
        public IList<State> GetAll()
        {
            var states = new List<State>();
            states.Add(new State { Id = 1, Name = "Maharashtra" });
            states.Add(new State { Id = 2, Name = "Karnataka" });
            states.Add(new State { Id = 3, Name = "Punjab" });
            states.Add(new State { Id = 4, Name = "Goa" });

            return states;
        }

        [HttpGet]
        [Route("api/setting/{stateid}/cities")]
        public IList<City> GetAllCities(int stateid)
        {
            var cities = new List<City>();
            cities.Add(new City { Id = 1, Name = "Pune" });
            cities.Add(new City { Id = 1, Name = "Sangli" });
            cities.Add(new City { Id = 1, Name = "Kolhapur" });
            cities.Add(new City { Id = 1, Name = "Satara" });
            return cities;
        }
    }
}