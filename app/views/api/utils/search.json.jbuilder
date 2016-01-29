json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |result|
    result = result.searchable
  
    if result.class == User
      json.partial!("api/users/user", user: result)
    else
      json.partial!("api/posts/post", post: result)
    end
  
    json._type result.class.to_s
  end
end