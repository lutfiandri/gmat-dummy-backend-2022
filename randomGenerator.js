export default function randomGenerator() {
  // teamID,status,yaw,pitch,roll,altitude,temperature,pressure
  const TEAM_ID = '1009';

  const now = new Date();
  const CLOCK = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const YAW = (Math.random() * 360 - 180).toFixed(2);
  const PITCH = (Math.random() * 360 - 180).toFixed(2);
  const ROLL = (Math.random() * 360 - 180).toFixed(2);

  const LATITUDE = (Math.random() * 100).toFixed(6);
  const LONGITUDE = (Math.random() * 100).toFixed(6);

  const VOLTAGE = (Math.random() * 12).toFixed(2);
  const PRESSURE = (Math.random() * 100).toFixed(2);
  const ALTITUDE = (Math.random() * 700).toFixed(2);

  return (
    TEAM_ID +
    ',' +
    CLOCK +
    ',' +
    YAW +
    ',' +
    PITCH +
    ',' +
    ROLL +
    ',' +
    LATITUDE +
    ',' +
    LONGITUDE +
    ',' +
    VOLTAGE +
    ',' +
    PRESSURE +
    ',' +
    ALTITUDE +
    ';'
  );
}
