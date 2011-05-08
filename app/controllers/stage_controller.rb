class StageController < ApplicationController
  
  def one_data
    data = StageOne.find_all_by_processed(false, :limit => 100, :select => "data, id")
    render(:json => data.to_json)
  end
  
  
  def one_result
    StageTwo.create(:data => params[:data], :processed => true)
    computed_ids = JSON.parse(params[:ids])
    if computed_ids and computed_ids.length > 0
      computed_ids.each {|id| 
        so = StageOne.find_by_id(id)
        so.update_attribute(:processed, true) if so
      }
    end
    render(:json => {:ack => true}.to_json)
  end
  
end
