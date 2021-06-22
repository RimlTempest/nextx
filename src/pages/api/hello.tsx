import handler from '../../apiUtils/handler';
import fmtString from '../../apiUtils/fmtString';

export default handler.get(async (req, res) => {
  const {
    query: { name, description },
  } = req;

  if (!name) {
      res.status(403).end('Error: no name');
      return;
  }

  if (!description) {
      res.status(403).end('Error: no description');
      return;
  }

  const data = {
    name: fmtString(name),
    description: fmtString(description),
    message: 'hello'
  };

  res.status(200).json(data);
});
