import { Router } from 'express';
import AppointmentsRepository from '../respositories/AppointmentsRepository';
import { startOfHour, parseISO } from 'date-fns';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(parseDate);

  if (findAppointmentInSameDate) {
    return response.status(400).json({ message: 'This000' });
  }

  const appointment = appointmentsRepository.create(provider, parseDate);

  return response.json(appointment);
});

export default appointmentsRouter;
