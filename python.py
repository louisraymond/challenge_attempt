def increment_dictionary_values(d,i):
  new_dict = d.copy()
  for key, value in new_dict.items():
    new_dict[key] = value + i
  return new_dict
