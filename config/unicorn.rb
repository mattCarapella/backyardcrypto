app_path = "/home/deploy/production/Backyardcrypto"

working_directory app_path
pid app_path + "/tmp/pids/unicorn.pid"
stderr_path app_path + "/log/unicorn.log"
stdout_path app_path + "/log/production.log"

# What ports/sockets to listen on, and what options for them.
#listen "/tmp/citizee_unicorn.todo.sock"

# You can listen on a port or a socket. Listening on a socket is good in a
# production environment, but listening on a port can be useful for local
# debugging purposes.
listen '/tmp/sockets/byc2-master_unicorn.todo.sock'

# For development, you may want to listen on port 3000 so that you can make sure
# your unicorn.rb file is soundly configured.
#listen(3000, backlog: 64) if ENV['RAILS_ENV'] == 'development'

worker_processes 2

# What the timeout for killing busy workers is, in seconds
timeout 65