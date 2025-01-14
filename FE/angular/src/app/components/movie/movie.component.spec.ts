import { ActivatedRoute,convertToParamMap  } from '@angular/router';
import { mockProvider, Spectator, createComponentFactory, MockProvider } from '@ngneat/spectator';
import {of} from 'rxjs';
import { DataService } from '../../services/data.service';
import { MovieComponent } from './movie.component';

const mockActivatedRoute = mockProvider(ActivatedRoute, {
  params: of(convertToParamMap({ id: '123' })), // Provide a sample parameter
});

const mockDataService = mockProvider(DataService, {
  getMovie: jest.fn()
});

describe('MovieComponent', () => {
  let spectator: Spectator<MovieComponent>;
  let component: MovieComponent;

  const createComponent = createComponentFactory({
    component: MovieComponent,
    imports: [],
    providers: [mockActivatedRoute, mockDataService],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  test('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
