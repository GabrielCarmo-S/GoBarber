import ICreateAppointDTO from 'modules/appointments/dtos/ICreateAppointmentDTO';
import Appointment from '../../infra/typeorm/entities/Appointment';
import { v4 } from 'uuid';
import IAppointmentsRepository from '../IAppointmentsRepository';
import isEqual from 'date-fns/isEqual';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date)
    );

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, { id: v4(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
