import { IMQTTConnection } from '@mqtt/IMQTTConnection';
import { IController } from 'Common/IController';
import { buildCommandButton } from 'Common/buildCommandButton';
import { Remote } from './Remote';

export const setupPresetButtons = (mqtt: IMQTTConnection, controller: IController<number>, remote: Remote) => {
  const flatCommand = remote.commands.Flat;
  if (flatCommand) {
    if (typeof flatCommand === 'number') buildCommandButton('Okimat', mqtt, controller, 'PresetFlat', flatCommand);
  }
  const memory1Command = remote.commands.Memory1;
  if (memory1Command) {
    if (typeof memory1Command === 'number')
      buildCommandButton('Okimat', mqtt, controller, 'PresetMemory1', memory1Command);
  }
  const memory2Command = remote.commands.Memory2;
  if (memory2Command) {
    if (typeof memory2Command === 'number')
      buildCommandButton('Okimat', mqtt, controller, 'PresetMemory1', memory2Command);
  }
};