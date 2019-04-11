import { turf } from '../utils/index'
import * as paths from './../services/paths'

const initialPaths = {
  shortestPath: turf.asFeatureCollection([]),
}

const pathsReducer = (store = initialPaths, action) => {

  switch (action.type) {
    case 'SET_SHORTEST_PATH':
      return {
        ...store,
        shortestPath: turf.asFeatureCollection([action.shortestPath])
      }

      case 'SET_ORIGIN':
      case 'SET_TARGET':
      return {
        ...store,
        shortestPath: turf.asFeatureCollection([])
      }

    case 'RESET_PATHS':
      return initialPaths

    default:
      return store
  }
}

export const getShortestPath = (originCoords, targetCoords) => {
  return async (dispatch) => {
    const shortestPath = await paths.getShortestPath(originCoords, targetCoords)
    console.log('shortestPath', shortestPath)
    dispatch({ type: 'SET_SHORTEST_PATH', shortestPath })
  }
}

export default pathsReducer