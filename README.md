# README

### Development Environment Requirements

- Ruby 2.7.0 (if you have trouble switching ruby versions with Bundler, the application runs fine with Ruby 2.5.5 - just update the version locally in your Gemfile)
- MySQL
- Yarn (https://classic.yarnpkg.com/en/docs/install)
- Bundler (`gem install bundler`)

### Setting up a development environment

1. Clone the repository from: https://github.com/coronavirusapi/coronavirusapi

2. Create a MySQL user for the application to use. 

    * If you want an application specific user (recommended), create databases `coronavirusapi_development`, `coronavirusapi_production`, and `coronavirusapi_test` and grant the MySQL user permissions on those tables.

3. Rename `config/database.yml.example` to `config/database.yml` and update the file with your database credentials

4. Import the database dump from `db/dump2.sql` using the command:
 
   * `cd <project-folder>`
   * `mysql -u <mysql-username> -p coronavirusapi_development < $PWD/db/dump.sql`
 
5. Run `bundle exec rails db:migrate RAILS_ENV=development`

6. Run `bundle exec rails s` to start the development server

7. Access the application at http://localhost:3000

Locally, you also need to run redis. If not, you need to use this url: http://localhost:3000/?reload=y
