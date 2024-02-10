export const getTopPlayers = (req, res, next) => {
  res.status(200).json({ success: true, message: "top players data" });
};

export const getRatingHistory = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `${req.params.username}'s rating history`,
  });
};

export const getCsv = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "csv file",
  });
};
