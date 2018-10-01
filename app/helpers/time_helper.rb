module TimeHelper

  def time_ago_in_days

    a = (Time.now-self).to_i

    case a
      # when 0 then 'just now'
      # when 1 then 'a second ago'
      # when 2..59 then a.to_s+' seconds ago' 
      # when 60..119 then 'a minute ago' #120 = 2 minutes
      # when 120..3540 then (a/60).to_i.to_s+' minutes ago'
      # when 3541..7100 then 'an hour ago' # 3600 = 1 hour
      # when 7101..82800 then ((a+99)/3600).to_i.to_s+' hours ago'
      when 0..82800 then '0 days' 
      when 82801..172000 then '1 day ago' # 86400 = 1 day
      else ((a+800)/(60*60*24)).to_i.to_s+' days'
    end
  end


  def test1
    puts "WORKS"
  end
end

Time.send :include, TimeHelper
