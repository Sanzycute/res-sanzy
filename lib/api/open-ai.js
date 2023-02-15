const { Configuration, OpenAIApi } =  require('@saipulanuar/openai')
function openai(text) {
return new Promise(async(resolve, reject) => {
  
                   
                
                      const configuration = new Configuration({
                          apiKey: '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',
                      });
                      const openai = new OpenAIApi(configuration);
                  
                      const response = await openai.createCompletion({
                          model: "text-davinci-003",
                          prompt: text,
                          temperature: 0.3,
                          max_tokens: 3000,
                          top_p: 1.0,
                          frequency_penalty: 0.0,
                          presence_penalty: 0.0,
                      });
                        resolve(response.data.choices[0].text)
                      
})

}

module.exports = { openai }