function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const hh = h > 0 ? `${h}:` : '';
  const mm = h > 0 ? String(m).padStart(2, '0') : `${m}`;
  const ss = String(s).padStart(2, '0');

  return `${hh}${mm}:${ss}`;
}

export default formatDuration;