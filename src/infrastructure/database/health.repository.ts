import Database from 'mongoose';

enum ConnectionStates {
  disconnected = 0,
  connected = 1,
  connecting = 2,
  disconnecting = 3,
  uninitialized = 99,
}

export class HealthRepository {
  public isConnected() {
    return Database.connection.readyState === ConnectionStates.connected;
  }
}

const healthRepository = new HealthRepository();

export default healthRepository;
