export default {
  core: {
    elevation: 300,
    latitude: 51.5287352,
    longitude: -0.381773,
    unit_system: {
      length: 'km',
      mass: 'kg',
      temperature: '°C',
      volume: 'L'
    }
  },
  services: {
    configurator: [
      'configure'
    ],
    tts: [
      'demo_say',
      'clear_cache'
    ],
    cover: [
      'open_cover',
      'close_cover',
      'open_cover_tilt',
      'close_cover_tilt',
      'set_cover_tilt_position',
      'set_cover_position',
      'stop_cover_tilt',
      'stop_cover'
    ],
    group: [
      'set',
      'reload',
      'remove',
      'set_visibility'
    ],
    alarm_control_panel: [
      'alarm_arm_night',
      'alarm_disarm',
      'alarm_trigger',
      'alarm_arm_home',
      'alarm_arm_away',
      'alarm_arm_custom_bypass'
    ],
    conversation: [
      'process'
    ],
    notify: [
      'demo_test_target_name',
      'notify'
    ],
    lock: [
      'open',
      'lock',
      'unlock'
    ],
    input_select: [
      'select_previous',
      'set_options',
      'select_next',
      'select_option'
    ],
    recorder: [
      'purge'
    ],
    persistent_notification: [
      'create',
      'dismiss'
    ],
    timer: [
      'pause',
      'cancel',
      'finish',
      'start'
    ],
    input_boolean: [
      'turn_off',
      'toggle',
      'turn_on'
    ],
    fan: [
      'set_speed',
      'turn_on',
      'turn_off',
      'set_direction',
      'oscillate',
      'toggle'
    ],
    climate: [
      'set_humidity',
      'set_operation_mode',
      'set_aux_heat',
      'turn_on',
      'set_hold_mode',
      'set_away_mode',
      'turn_off',
      'set_fan_mode',
      'set_temperature',
      'set_swing_mode'
    ],
    switch: [
      'turn_off',
      'toggle',
      'turn_on'
    ],
    script: [
      'turn_off',
      'demo',
      'reload',
      'toggle',
      'turn_on'
    ],
    scene: [
      'turn_on'
    ],
    system_log: [
      'clear',
      'write'
    ],
    camera: [
      'disable_motion_detection',
      'enable_motion_detection',
      'snapshot'
    ],
    image_processing: [
      'scan'
    ],
    media_player: [
      'media_previous_track',
      'clear_playlist',
      'shuffle_set',
      'media_seek',
      'turn_on',
      'media_play_pause',
      'media_next_track',
      'media_pause',
      'volume_down',
      'volume_set',
      'media_stop',
      'toggle',
      'media_play',
      'play_media',
      'volume_mute',
      'turn_off',
      'select_sound_mode',
      'select_source',
      'volume_up'
    ],
    input_number: [
      'set_value',
      'increment',
      'decrement'
    ],
    device_tracker: [
      'see'
    ],
    homeassistant: [
      'stop',
      'check_config',
      'reload_core_config',
      'turn_on',
      'turn_off',
      'restart',
      'toggle'
    ],
    light: [
      'turn_off',
      'toggle',
      'turn_on'
    ],
    input_text: [
      'set_value'
    ]
  }
};
