<template>
  <div class="font-test-container">
    <h1 class="main-title">Welcome to Font Performance Dendy Test</h1>
    
    <section class="font-section">
      <h2 class="mulish-regular">Mulish Regular (400) - Main Content</h2>
      <p class="mulish-regular">
        This text uses the Mulish font with regular weight (400). The font loading should be clearly visible as the text renders.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>

    <section class="font-section">
      <h2 class="mulish-semibold">Mulish Semi-Bold (600) - Headings</h2>
      <p class="mulish-semibold">
        This text uses the Mulish font with semi-bold weight (600). Notice the difference in font weight and how it loads.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>

    <section class="font-section">
      <h3 class="mulish-regular">Extensive Content Section (100x Repeated)</h3>
      <div class="content-blocks">
        <div 
          v-for="i in 2000" 
          :key="i"
          class="content-block"
          :class="i % 2 === 0 ? 'mulish-semibold' : 'mulish-regular'"
        >
          <h4>Block {{ i }} - {{ getBlockTitle(i) }}</h4>
          <p>{{ getBlockContent(i) }}</p>
        </div>
      </div>
    </section>

    <section class="font-section">
      <h3 class="mulish-regular">Additional Content for Font Loading Test</h3>
      <div class="long-content mulish-regular">
        <p>This section contains additional content to ensure the font loading takes sufficient time to be noticeable. The Mulish font will be loaded from Google Fonts and you should be able to observe the font loading effect (FOIT/FOUT) as the page renders.</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        
        <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      </div>
    </section>

    <section class="font-section">
      <h3 class="mulish-semibold">Performance Observation Notes</h3>
      <div class="observation-notes mulish-regular">
        <p><strong>What to observe:</strong></p>
        <ul>
          <li>Initial text rendering with fallback fonts</li>
          <li>Font loading progress and switching</li>
          <li>Visual changes as Mulish font loads</li>
          <li>Differences between regular (400) and semi-bold (600) weights</li>
          <li>Overall page rendering performance</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    getBlockTitle(index) {
      const titles = [
        'Lorem Ipsum',
        'Sed Ut Perspiciatis',
        'Neque Porro Quisquam',
        'Quis Autem Vel',
        'Similique Sunt',
        'Temporibus Autem',
        'Dolorem Eum Fugiat',
        'Excepteur Sint Occaecat',
        'Duis Aute Irure',
        'Ut Enim Ad Minim'
      ];
      return titles[(index - 1) % titles.length];
    },
    getBlockContent(index) {
      const contents = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
        'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        'Dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ];
      return contents[(index - 1) % contents.length];
    }
  }
}
</script>

<style>
/* Basic styles to see font changes */
body {
  margin: 20px;
  font-size: 18px;
  line-height: 1.6;
}

.font-test-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.main-title {
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
  font-size: 3em;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
}

.font-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
}

.font-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #34495e;
}

.font-section h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #34495e;
}

.font-section h4 {
  font-size: 1.4em;
  margin-bottom: 10px;
  color: #2c3e50;
}

.mulish-regular {
  font-family: 'Mulish', sans-serif;
  font-weight: 400;
}

.mulish-semibold {
  font-family: 'Mulish', sans-serif;
  font-weight: 600;
}

.content-blocks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.content-block {
  padding: 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.content-block p {
  margin-bottom: 15px;
  text-align: justify;
}

.long-content p {
  margin-bottom: 20px;
  text-align: justify;
  font-size: 1.1em;
}

.observation-notes {
  background-color: #e8f4fd;
  padding: 20px;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.observation-notes ul {
  margin-top: 10px;
  padding-left: 20px;
}

.observation-notes li {
  margin-bottom: 8px;
}

/* Responsive design */
@media (max-width: 768px) {
  .content-blocks {
    grid-template-columns: 1fr;
  }
  
  .main-title {
    font-size: 2em;
  }
  
  .font-section h2 {
    font-size: 1.8em;
  }
}
</style> 