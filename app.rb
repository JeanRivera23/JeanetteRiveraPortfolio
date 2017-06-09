require "sinatra"
require "sendgrid-ruby"

get "/" do
  erb :home
end

post "/" do
  # if you want to see what params have been sent
  #   from your form uncomment the following line
  params.inspect

  # you can use these params as input into an
  #   email form (subject, from, to, etc)
  # your email code goes here

  from = SendGrid::Email.new(email: params[:from])
  subject = params[:subject]
  to = SendGrid::Email.new(email: 'jeanetterivera465@gmail.com')
  content = SendGrid::Content.new(type: 'text/plain', value: params[:content])
  mail = SendGrid::Mail.new(from, subject, to, content)
   sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])

   response = sg.client.mail._('send').post(request_body: mail.to_json)
  puts response.status_code
  puts response.body

  # this redirects to the contact form
  redirect "/"
end
