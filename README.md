# Search

### Files to look at:

- [`search.jsx`][search_component]
- [`search_results_store.js`][store]
- [`search_api_util.js`][api_util]
- [`routes.rb`][routesrb]
- [`Api::UtilsController`][utils_controller]
- [`search_results.json.jbuilder`][jbuilder]
- [`gemfile`][gemfile]
- [`User`][user] & [`Post`][post]
- [Multisearch migration][migration]

[search_component]: ./frontend/components/search.jsx
[store]: ./frontend/stores/search_results_store.js
[api_util]: ./frontend/util/search_api_util.js
[routesrb]: ./config/routes.rb
[utils_controller]: ./app/controllers/api/utils_controller.rb
[jbuilder]: ./app/views/api/utils/search.json.jbuilder
[gemfile]: ./Gemfile
[user]: ./app/models/user.rb
[post]: ./app/models/post.rb
[migration]: ./db/migrate/20160129212110_create_pg_search_documents.rb


### Plugins: 

- [`PgSearch`][pg_search]
- [`Kaminari`][kaminari]

[pg_search]: https://github.com/Casecommons/pg_search
[kaminari]: https://github.com/amatsuda/kaminari
