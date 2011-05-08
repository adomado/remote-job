def load
  lines = File.readlines("../test-data.txt")
  lines.each { |line|
    StageOne.create(:data => line.strip)
  }
end
