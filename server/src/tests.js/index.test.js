const server = require("../../index");
const { Activity } = require('../db');
const session = require("supertest");
const agent = session(server);

describe('Controladores', () => {
    describe('POST /activities', () => {
      it('debería crear una nueva actividad turística', async () => {
        const response = await agent
          .post('/activities')
          .send({
            nombre: 'Senderismo',
            duracion: '3hs',
            dificultad: '5',
            estacion: 'Verano',
            countries: ['KEN'] 
          });
        expect(response.status).toBe(200);
        // Verificar que la actividad se creó en la base de datos
        const activity = await Activity.findOne({ where: { nombre: 'Senderismo' ,duracion: '3hs',
        dificultad: '5',
        estacion: 'Verano',
        countries: ['KEN']  } });
        expect(activity).toBeDefined();
      });
      it("dabería devolver 'Faltan datos'", async ()=>{
        const response = await agent
        .post('/activities')
        .send({
          duracion: 'Medio día',
          dificultad: 'Moderada',
          estacion: 'Verano',
          countries: ['KEN'] 
        });
      expect(response.status).toBe(404);
      // Verificar que la actividad se creó en la base de datos
      const activity = await Activity.findOne({ where: { nombre: 'Senderismo' } });
      expect(activity).toBeUndefined();
      })
    });
  });
