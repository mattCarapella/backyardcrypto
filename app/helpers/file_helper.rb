module FileHelper

	def add_to_db
		coins = File.open("coins.txt").read
		coins.each_line do |line|
			Coin.create(name: "#{line}")
		end
	end

end
