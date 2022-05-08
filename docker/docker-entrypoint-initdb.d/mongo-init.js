print('Start #################################################################');

db = db.getSiblingDB('url_shortener');
db.createUser(
  {
    user: 'url_shortener',
    pwd: 'url_shortener-123',
    roles: [{ role: 'readWrite', db: 'url_shortener' }],
  },
);

print('END #################################################################');
