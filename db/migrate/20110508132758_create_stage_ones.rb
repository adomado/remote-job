class CreateStageOnes < ActiveRecord::Migration
  def self.up
    create_table :stage_ones do |t|
      t.string :data
      t.boolean :processed, :default => false

      t.timestamps
    end
  end

  def self.down
    drop_table :stage_ones
  end
end
