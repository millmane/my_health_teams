@posts.each do |post|
  # json.extract! post, :content
  json.set! post.id do
    json.partial! 'post', post: post
  end
end
