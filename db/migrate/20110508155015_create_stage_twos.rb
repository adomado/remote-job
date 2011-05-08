class CreateStageTwos < ActiveRecord::Migration
  def self.up
    create_table :stage_twos do |t|
      t.text :data
      t.boolean :processed, :default => false

      t.timestamps
    end
  end

  def self.down
    drop_table :stage_twos
  end
end
