Hooks.on("initializeDynamicTokenRingConfig", (registry) => {
  const rings = [
    "mechanized"
  ];

  for (const ring of rings) {
    const key = ring.replace(/-/g, "") + "Ring";
    const label =  "Taverna " + ring.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) + " Ring";
    const spritesheet = `modules/taverna-aventurile-wm/assets/rings/${ring}/rings.json`;

    registry.addConfig(key, new foundry.canvas.tokens.DynamicRingData({
      label,
      spritesheet,
      effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
      },
}));
  }
});
