module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfc6581gp3jokp7mmk9g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_pb8z'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'fUStqCoBUwpKnz5J7dB25zXdlHhtwTsT'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
