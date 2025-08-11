import { query, validationResult } from 'express-validator';

const validatePlaylistRequest = [
  query('playlistid')
    .trim()
    .notEmpty().withMessage('Playlist ID or URL is required.')
    .isString().withMessage('Playlist ID must be a string.'),
  
  query('maxresults')
    .optional()
    .isInt({ min: 1, max: 50 }).withMessage('Max results must be a number between 1 and 50.'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validatePlaylistRequest };
